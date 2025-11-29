"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "@/components/support/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

// Тип пользователя, совместимый с DashboardContent
type User = {
  id: string
  email: string
  role: string
  name?: string | null
  profile?: {
    fullName?: string | null
  } | null
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRes = await fetch("/api/user", { cache: "no-store" })
        if (!userRes.ok) {
          router.replace("/login")
          return
        }

        const userData = await userRes.json()
        const profileRes = await fetch("/api/profile", { cache: "no-store" })
        const profileData = profileRes.ok ? await profileRes.json() : null

        const composedUser: User = {
          id: userData.id,
          email: userData.email,
          role: userData.role,
          name: userData.name ?? null,
          profile: profileData ?? null,
        }

        setUser(composedUser)
      } catch (e) {
        setError("Ошибка при загрузке профиля. Попробуйте ещё раз.")
        setTimeout(() => {
          router.replace("/login")
        }, 1500)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-purple">
        <span className="text-lg text-white animate-pulse">Загрузка...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gradient-purple">
        <span className="text-lg text-red-200">{error}</span>
      </div>
    )
  }

  // Если пользователь всё же null, не рендерим контент
  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen gradient-purple">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <DashboardContent user={user} />
      </div>
    </div>
  )
}
