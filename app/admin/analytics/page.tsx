import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AnalyticsCharts } from "@/components/admin/analytics-charts"
import { DashboardHeader } from "@/components/support/dashboard-header"

export default function AnalyticsPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <DashboardHeader />
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Аналитика</h1>
            <p className="text-muted-foreground">
              Статистика и графики по работе платформы
            </p>
          </div>
          <AnalyticsCharts />
        </div>
      </main>
    </div>
  )
}
