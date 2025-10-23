type User = {
  id: string
  email: string
  password: string
  name: string | null
  role: string
  createdAt: Date
  profile?: Profile
}

type Profile = {
  id: string
  userId: string
  balance: number
  createdAt: Date
}

type ServerPlan = {
  id: string
  name: string
  nameRu: string
  cpu: number
  ram: number
  storage: number
  bandwidth: number
  price: number
  popular: boolean
  description: string | null
  createdAt: Date
}

type Order = {
  id: string
  userId: string
  serverPlanId: string
  pricePaid: number
  billingPeriod: string
  serverName: string | null
  status: string
  expiresAt: Date
  createdAt: Date
  serverPlan?: ServerPlan
}

class MockDB {
  private getItem<T>(key: string): T[] {
    if (typeof window === "undefined") return []
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  }

  private setItem<T>(key: string, data: T[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem(key, JSON.stringify(data))
  }

  // Initialize with default data
  init() {
    if (typeof window === "undefined") return

    // Initialize server plans if not exists
    const plans = this.getItem<ServerPlan>("serverPlans")
    if (plans.length === 0) {
      const defaultPlans: ServerPlan[] = [
        {
          id: "1",
          name: "Starter",
          nameRu: "Начальный",
          cpu: 2,
          ram: 4,
          storage: 80,
          bandwidth: 4000,
          price: 10, // USD per month
          popular: false,
          description: "Идеально для небольших проектов",
          createdAt: new Date(),
        },
        {
          id: "2",
          name: "Professional",
          nameRu: "Профессиональный",
          cpu: 4,
          ram: 8,
          storage: 160,
          bandwidth: 8000,
          price: 20, // USD per month
          popular: true,
          description: "Оптимальный выбор для бизнеса",
          createdAt: new Date(),
        },
        {
          id: "3",
          name: "Enterprise",
          nameRu: "Корпоративный",
          cpu: 8,
          ram: 16,
          storage: 320,
          bandwidth: 16000,
          price: 40, // USD per month
          popular: false,
          description: "Максимальная производительность",
          createdAt: new Date(),
        },
      ]
      this.setItem("serverPlans", defaultPlans)
    }

    // Initialize users if not exists
    const users = this.getItem<User>("users")
    if (users.length === 0) {
      this.setItem("users", [])
    }

    // Initialize profiles if not exists
    const profiles = this.getItem<Profile>("profiles")
    if (profiles.length === 0) {
      this.setItem("profiles", [])
    }

    // Initialize orders if not exists
    const orders = this.getItem<Order>("orders")
    if (orders.length === 0) {
      this.setItem("orders", [])
    }
  }

  user = {
    findUnique: async ({
      where,
      include,
    }: { where: { id?: string; email?: string }; include?: { profile?: boolean } }) => {
      const users = this.getItem<User>("users")
      const user = users.find((u) => (where.id ? u.id === where.id : u.email === where.email))

      if (user && include?.profile) {
        const profiles = this.getItem<Profile>("profiles")
        user.profile = profiles.find((p) => p.userId === user!.id)
      }

      return user || null
    },

    create: async ({
      data,
    }: {
      data: Omit<User, "id" | "createdAt" | "role"> & {
        profile?: { create: Omit<Profile, "id" | "userId" | "createdAt"> }
      }
    }) => {
      const users = this.getItem<User>("users")
      const newUser: User = {
        id: Date.now().toString(),
        email: data.email,
        password: data.password,
        name: data.name || null,
        role: "user",
        createdAt: new Date(),
      }
      users.push(newUser)
      this.setItem("users", users)

      if (data.profile) {
        const profiles = this.getItem<Profile>("profiles")
        const newProfile: Profile = {
          id: Date.now().toString(),
          userId: newUser.id,
          balance: data.profile.create.balance,
          createdAt: new Date(),
        }
        profiles.push(newProfile)
        this.setItem("profiles", profiles)
      }

      return newUser
    },

    findMany: async () => {
      return this.getItem<User>("users")
    },
  }

  profile = {
    findUnique: async ({ where }: { where: { userId: string } }) => {
      const profiles = this.getItem<Profile>("profiles")
      return profiles.find((p) => p.userId === where.userId) || null
    },

    update: async ({ where, data }: { where: { userId: string }; data: Partial<Profile> }) => {
      const profiles = this.getItem<Profile>("profiles")
      const index = profiles.findIndex((p) => p.userId === where.userId)
      if (index !== -1) {
        profiles[index] = { ...profiles[index], ...data }
        this.setItem("profiles", profiles)
        return profiles[index]
      }
      return null
    },
  }

  serverPlan = {
    findMany: async () => {
      return this.getItem<ServerPlan>("serverPlans")
    },

    findUnique: async ({ where }: { where: { id: string } }) => {
      const plans = this.getItem<ServerPlan>("serverPlans")
      return plans.find((p) => p.id === where.id) || null
    },

    create: async ({ data }: { data: Omit<ServerPlan, "id" | "createdAt"> }) => {
      const plans = this.getItem<ServerPlan>("serverPlans")
      const newPlan: ServerPlan = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
      }
      plans.push(newPlan)
      this.setItem("serverPlans", plans)
      return newPlan
    },

    update: async ({ where, data }: { where: { id: string }; data: Partial<ServerPlan> }) => {
      const plans = this.getItem<ServerPlan>("serverPlans")
      const index = plans.findIndex((p) => p.id === where.id)
      if (index !== -1) {
        plans[index] = { ...plans[index], ...data }
        this.setItem("serverPlans", plans)
        return plans[index]
      }
      return null
    },

    delete: async ({ where }: { where: { id: string } }) => {
      const plans = this.getItem<ServerPlan>("serverPlans")
      const filtered = plans.filter((p) => p.id !== where.id)
      this.setItem("serverPlans", filtered)
      return { id: where.id }
    },
  }

  order = {
    create: async ({ data }: { data: Omit<Order, "id" | "createdAt"> }) => {
      const orders = this.getItem<Order>("orders")
      const newOrder: Order = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
      }
      orders.push(newOrder)
      this.setItem("orders", orders)
      return newOrder
    },

    findMany: async ({
      where,
      include,
      orderBy,
    }: { where?: { userId?: string }; include?: { serverPlan?: boolean }; orderBy?: { createdAt: string } }) => {
      let orders = this.getItem<Order>("orders")

      if (where?.userId) {
        orders = orders.filter((o) => o.userId === where.userId)
      }

      if (include?.serverPlan) {
        const plans = this.getItem<ServerPlan>("serverPlans")
        orders = orders.map((o) => ({
          ...o,
          serverPlan: plans.find((p) => p.id === o.serverPlanId),
        }))
      }

      if (orderBy?.createdAt === "desc") {
        orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      }

      return orders
    },

    findUnique: async ({ where }: { where: { id: string } }) => {
      const orders = this.getItem<Order>("orders")
      return orders.find((o) => o.id === where.id) || null
    },
  }
}

export const db = new MockDB()

// Initialize on client side
if (typeof window !== "undefined") {
  db.init()
}
