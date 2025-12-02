import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { SettingsForm } from "@/components/admin/settings-form"
import { DashboardHeader } from "@/components/support/dashboard-header"

export default function SettingsPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <DashboardHeader />
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Настройки</h1>
            <p className="text-muted-foreground">
              Управление настройками платформы
            </p>
          </div>
          <SettingsForm />
        </div>
      </main>
    </div>
  )
}
