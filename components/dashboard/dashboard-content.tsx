"use client"

import { StatsCards } from "./stats-cards"
import { ServersList } from "./servers-list"
import { RecentActivity } from "./recent-activity"
import { useLanguage } from "@/contexts/language-context"

interface User {
  id: string
  email: string
  role: string
  profile?: {
    fullName?: string
  }
}

export function DashboardContent({ user }: { user: User }) {
  const { t } = useLanguage()

  return (
    <main className="flex-1 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("dashboard.title")}</h1>
          <p className="text-muted-foreground">
            {t("dashboard.welcome")}, {user.profile?.fullName || user.email}
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ServersList />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </main>
  )
}
