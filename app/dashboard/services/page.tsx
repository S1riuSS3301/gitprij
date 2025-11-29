"use client"

import { DashboardHeader } from "@/components/support/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { useLanguage } from "@/contexts/language-context"
import { Server } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen gradient-purple">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-foreground text-center">{t("sidebar.myServices")}</h1>
            <div className="border border-border/50 rounded-xl p-6 bg-background/50 flex flex-col items-center justify-center text-center">
              <Server className="w-16 h-16 text-primary mb-4 animate-spin-slow" />
              <p className="text-muted-foreground">
                {t("common.comingSoon")}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

