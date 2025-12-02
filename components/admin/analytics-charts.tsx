"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"
import { useTranslations } from "next-intl"

export function AnalyticsCharts() {
  const t = useTranslations('admin')
  // Placeholder data - replace with real API data
  const revenueData = [
    { month: "Янв", revenue: 12000 },
    { month: "Фев", revenue: 15000 },
    { month: "Мар", revenue: 18000 },
    { month: "Апр", revenue: 22000 },
    { month: "Май", revenue: 25000 },
    { month: "Июн", revenue: 28000 },
  ]

  const userData = [
    { month: "Янв", users: 120 },
    { month: "Фев", users: 150 },
    { month: "Мар", users: 180 },
    { month: "Апр", users: 220 },
    { month: "Май", users: 280 },
    { month: "Июн", users: 320 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t('totalRevenue')}</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₽125,000</div>
          <p className="text-xs text-muted-foreground">
            +20.1% по сравнению с прошлым месяцем
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t('newUsers')}</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+320</div>
          <p className="text-xs text-muted-foreground">
            +15% по сравнению с прошлым месяцем
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t('orders')}</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">
            +10.5% по сравнению с прошлым месяцем
          </p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>{t('revenueChart')}</CardTitle>
          <CardDescription>
            {t('revenueByMonth')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>{t('chartPlaceholder')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
