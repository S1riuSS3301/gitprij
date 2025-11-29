import type { User, ActivityLog } from "./types"
import { storage, KEYS } from "./storage"

export const auth = {
  login: (email: string, password: string): User | null => {
    // Исправлено: убрана типизация get (JS storage API не поддерживает дженерики)
    const users = (storage.get(KEYS.USERS) as User[]) || []
    // Исправлено: определен тип для 'u'
    const user = users.find((u: User) => u.email === email)
    if (!user) return null

    logActivity(user.id, "login", "User logged in")
    storage.set(KEYS.USER, user)
    return user
  },

  register: (email: string, password: string, telegram?: string, referralCode?: string): User | null => {
    const users = (storage.get(KEYS.USERS) as User[]) || []

    if (users.find((u: User) => u.email === email)) {
      return null
    }

    const userReferralCode = generateReferralCode()

    const newUser: User = {
      id: generateId(),
      email,
      role: "user",
      balance: 0,
      registeredAt: new Date().toISOString(),
      telegram,
      referralCode: userReferralCode,
      referredBy: referralCode,
      totalTopUps: 0,
    }

    users.push(newUser)
    storage.set(KEYS.USERS, users)

    // Handle referral
    if (referralCode) {
      const referrer = users.find((u: User) => u.referralCode === referralCode)
      if (referrer) {
        // Исправлено: убрана дженерик типизация get
        const referrals = (storage.get(KEYS.REFERRALS) as any[]) || []
        referrals.push({
          id: generateId(),
          referrerId: referrer.id,
          referredId: newUser.id,
          earnings: 0,
          createdAt: new Date().toISOString(),
        })
        storage.set(KEYS.REFERRALS, referrals)
      }
    }

    logActivity(newUser.id, "register", "User registered")
    storage.set(KEYS.USER, newUser)
    return newUser
  },

  logout: (): void => {
    const user = storage.get(KEYS.USER) as User | null
    if (user) {
      logActivity(user.id, "logout", "User logged out")
    }
    storage.remove(KEYS.USER)
  },

  getCurrentUser: (): User | null => {
    return storage.get(KEYS.USER) as User | null
  },

  updateUser: (updates: Partial<User>): void => {
    const user = storage.get(KEYS.USER) as User | null
    if (!user) return

    const updatedUser: User = { ...user, ...updates }
    storage.set(KEYS.USER, updatedUser)

    const users = (storage.get(KEYS.USERS) as User[]) || []
    const index = users.findIndex((u: User) => u.id === user.id)
    if (index !== -1) {
      users[index] = updatedUser
      storage.set(KEYS.USERS, users)
    }
  },
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

function generateReferralCode(): string {
  return Math.random().toString(36).substr(2, 8).toUpperCase()
}

function logActivity(userId: string, action: string, details: string): void {
  const logs = (storage.get(KEYS.ACTIVITY_LOGS) as ActivityLog[]) || []
  logs.push({
    id: generateId(),
    userId,
    action,
    ip: "127.0.0.1", // Mock IP
    timestamp: new Date().toISOString(),
    details,
  })
  storage.set(KEYS.ACTIVITY_LOGS, logs)
}
