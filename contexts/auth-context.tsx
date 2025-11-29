"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { signIn, signOut, signUp } from "@/lib/actions/auth"

type Profile = { fullName?: string | null; balance?: number } | null
type AuthUser = { id: string; email: string; role: string; name?: string | null; profile?: Profile }

interface AuthContextType {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, fullName?: string) => Promise<boolean>
  logout: () => Promise<void>
  refresh: () => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  const refresh = async () => {
    try {
      const [u, p] = await Promise.all([
        fetch("/api/user").then((r) => (r.ok ? r.json() : null)),
        fetch("/api/profile").then((r) => (r.ok ? r.json() : null)),
      ])
      if (!u) {
        setUser(null)
        return
      }
      setUser({ id: u.id, email: u.email, role: u.role, name: u.name ?? null, profile: p ?? null })
    } catch {
      setUser(null)
    }
  }

  useEffect(() => {
    ;(async () => {
      await refresh()
      setIsLoading(false)
    })()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    const res = await signIn(email, password)
    if ((res as any)?.error) {
      toast({ title: "Ошибка входа", description: "Неверный email или пароль", variant: "destructive" })
      return false
    }
    await refresh()
    toast({ title: "Добро пожаловать!", description: "Вы успешно вошли в систему" })
    router.push("/dashboard")
    return true
  }

  const register = async (email: string, password: string, fullName?: string): Promise<boolean> => {
    const res = await signUp(email, password, fullName)
    if ((res as any)?.error) {
      toast({ title: "Ошибка регистрации", description: (res as any).error, variant: "destructive" })
      return false
    }
    await refresh()
    toast({ title: "Регистрация успешна!", description: "Добро пожаловать в VDS_HUB" })
    router.push("/dashboard")
    return true
  }

  const logout = async () => {
    await signOut()
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, refresh, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
