"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DollarSign } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface ReferralItem {
  id: string
  referredId: string
  earnings: number
  createdAt: string
  referredUser?: {
    email?: string
    name?: string
  }
}

export function ReferralHistory() {
  const [referrals, setReferrals] = useState<ReferralItem[]>([])
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const loadReferrals = async () => {
      try {
        const res = await fetch("/api/referrals", { cache: "no-store" })
        if (res.ok) {
          const data = await res.json()
          setReferrals(data.referrals || [])
        }
      } catch (error) {
        console.error("Failed to load referrals:", error)
      } finally {
        setLoading(false)
      }
    }
    loadReferrals()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "ru" ? "ru-RU" : "en-US")
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
  }

  if (loading) {
    return (
      <div className="card-gradient rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold text-foreground mb-6">
          {language === "ru" ? "Ваши рефералы" : "Your Referrals"}
        </h2>
        <div className="text-center py-8 text-muted-foreground">
          {language === "ru" ? "Загрузка..." : "Loading..."}
        </div>
      </div>
    )
  }

  return (
    <div className="card-gradient rounded-xl p-6 border border-border/50">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {language === "ru" ? "Ваши рефералы" : "Your Referrals"}
      </h2>

      {referrals.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          {language === "ru" 
            ? "У вас пока нет рефералов" 
            : "You don't have any referrals yet"}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                  {language === "ru" ? "Пользователь" : "User"}
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                  {language === "ru" ? "Дата регистрации" : "Registration Date"}
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                  {language === "ru" ? "Ваш доход" : "Your Earnings"}
                </th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral) => {
                const userEmail = referral.referredUser?.email || referral.referredId || "N/A"
                return (
                  <tr key={referral.id} className="border-b border-border/30 hover:bg-background/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">
                            {userEmail.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-foreground">{userEmail}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {formatDate(referral.createdAt)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-semibold text-green-400">
                          {formatCurrency(referral.earnings)}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
