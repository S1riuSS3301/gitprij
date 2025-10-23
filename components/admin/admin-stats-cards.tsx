"use client"

import { Users, Server, DollarSign, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export function AdminStatsCards() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeServers: 0,
    monthlyRevenue: 0,
    averageCheck: 0,
  })

  useEffect(() => {
    // Fetch real data from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")

    const totalUsers = users.length
    const activeServers = orders.filter((o: any) => o.status === "active").length
    const monthlyRevenue = orders.reduce((sum: number, o: any) => sum + (o.pricePaid || 0), 0)
    const averageCheck = totalUsers > 0 ? monthlyRevenue / totalUsers : 0

    setStats({
      totalUsers,
      activeServers,
      monthlyRevenue,
      averageCheck,
    })
  }, [])

  const statsData = [
    {
      icon: Users,
      label: "Всего пользователей",
      value: stats.totalUsers.toString(),
      change: "+48 за неделю",
      positive: true,
    },
    {
      icon: Server,
      label: "Активные серверы",
      value: stats.activeServers.toString(),
      change: "+23 за неделю",
      positive: true,
    },
    {
      icon: DollarSign,
      label: "Доход за месяц",
      value: `${stats.monthlyRevenue.toFixed(2)} ₽`,
      change: "+15% к прошлому месяцу",
      positive: true,
    },
    {
      icon: TrendingUp,
      label: "Средний чек",
      value: `${stats.averageCheck.toFixed(2)} ₽`,
      change: "+2.30 ₽ к прошлому месяцу",
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center glow-effect">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className={`text-xs ${stat.positive ? "text-green-400" : "text-muted-foreground"}`}>{stat.change}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
