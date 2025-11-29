"use client"

import { Users, DollarSign, TrendingUp, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ReferralStats() {
  const [stats, setStats] = useState({
    totalReferrals: 0,
    totalEarnings: 0,
    avgEarnings: 0,
  })
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch("/api/referrals", { cache: "no-store" })
        if (res.ok) {
          const data = await res.json()
          setStats({
            totalReferrals: data.totalReferrals || 0,
            totalEarnings: data.totalEarnings || 0,
            avgEarnings: data.totalReferrals > 0 ? (data.totalEarnings / data.totalReferrals) : 0,
          })
        }
      } catch (error) {
        console.error("Failed to load referral stats:", error)
      } finally {
        setLoading(false)
      }
    }
    loadStats()
  }, [])

  const statsData = [
    {
      icon: Users,
      label: language === "ru" ? "Приглашено пользователей" : "Invited Users",
      value: stats.totalReferrals.toString(),
      change: language === "ru" ? "Активные рефералы" : "Active referrals",
      positive: true,
    },
    {
      icon: DollarSign,
      label: language === "ru" ? "Заработано всего" : "Total Earned",
      value: `$${stats.totalEarnings.toFixed(2)}`,
      change: language === "ru" ? "Всего доходов" : "Total income",
      positive: true,
    },
    {
      icon: TrendingUp,
      label: language === "ru" ? "Средний доход" : "Average Earnings",
      value: `$${stats.avgEarnings.toFixed(2)}`,
      change: language === "ru" ? "На реферала" : "Per referral",
      positive: true,
    },
    {
      icon: Award,
      label: language === "ru" ? "Комиссия" : "Commission",
      value: "10%",
      change: language === "ru" ? "От пополнений рефералов" : "From referral top-ups",
      positive: true,
    },
  ]
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="card-gradient rounded-xl p-6 border border-border/50 animate-pulse"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/20 mb-4" />
            <div className="h-4 w-24 bg-muted/50 rounded mb-2" />
            <div className="h-8 w-20 bg-muted/50 rounded" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
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
