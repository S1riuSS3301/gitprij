"use client"

import { StatsCards } from "./stats-cards"
import { ServersList } from "./servers-list"
import { RecentActivity } from "./recent-activity"
import { useLanguage } from "@/contexts/language-context"

interface User {
  id: string
  email: string
  role: string
  name?: string | null
  profile?: {
    fullName?: string | null
  } | null
}

export function DashboardContent({ user }: { user: User }) {
  const { t } = useLanguage()

  // Выводим имя в порядке приоритета: профиль -> имя пользователя -> email
  const displayName =
    user?.profile?.fullName || user?.name || user?.email || ""

  return (
    <main className="flex-1 p-6 lg:p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="animate-slide-up anim-delay-100">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("dashboard.title")}</h1>
          <p className="text-muted-foreground">
            {t("dashboard.welcome")}, {displayName}
          </p>
        </div>

        <div className="animate-slide-up anim-delay-200">
          <StatsCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 animate-slide-up anim-delay-300">
            <ServersList />
          </div>
          <div className="animate-slide-up anim-delay-400">
            <RecentActivity />
          </div>
        </div>
      </div>
    </main>
  )
}
