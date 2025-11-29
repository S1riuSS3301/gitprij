"use client"

import { Server, DollarSign, Activity, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/contexts/currency-context"

export function StatsCards() {
  const { t } = useLanguage()
  const { currency, formatPrice } = useCurrency()
  const [stats, setStats] = useState({
    activeServers: 0,
    balance: 0,
    usage: 0,
    referralIncome: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const profileRes = await fetch("/api/profile", { cache: "no-store" })
        const profile = profileRes.ok ? await profileRes.json() : { balance: 0 }
        setStats((stats) => ({
          ...stats,
          balance: profile.balance || 0,
        }))
      } catch {
        setStats((stats) => ({ ...stats, balance: 0 }))
      }
    }
    fetchStats()
  }, [])

  const statsData = [
    {
      icon: Server,
      label: t("stats.activeServers"),
      value: stats.activeServers.toString(),
      change: `+1 ${t("stats.perMonth")}`,
      positive: true,
    },
    {
      icon: DollarSign,
      label: t("stats.balance"),
      value: formatPrice(stats.balance),
      change: `${t("stats.lastTopUp")}: ${formatPrice(500)}`,
      positive: true,
    },
    {
      icon: Activity,
      label: t("stats.usage"),
      value: `${stats.usage}%`,
      change: t("stats.avgLoad"),
      positive: false,
    },
    {
      icon: TrendingUp,
      label: t("stats.referralIncome"),
      value: formatPrice(stats.referralIncome),
      change: `+${formatPrice(2.5)} ${t("stats.perWeek")}`,
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
