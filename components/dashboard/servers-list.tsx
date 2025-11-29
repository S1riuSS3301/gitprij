"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, MoreVertical } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/contexts/currency-context"
import { useEffect, useState } from "react"

interface ServerOrder {
  id: string
  serverName: string
  status: string
  serverPlanId: string
  expiresAt: string
  createdAt: string
  pricePaid: number
  billingPeriod: string
}

export function ServersList() {
  const { t, language } = useLanguage()
  const { formatPrice, convertPrice } = useCurrency()
  const [servers, setServers] = useState<ServerOrder[]>([])
  const [plans, setPlans] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/orders', { cache: 'no-store' })
      .then(res => res.ok ? res.json() : [])
      .then(data => setServers(data || []))
    fetch('/api/server-plans', { cache: 'no-store' })
      .then(res => res.ok ? res.json() : [])
      .then(data => setPlans(data || []))
  }, [])

  const getPlan = (planId: string) => {
    return plans.find((p) => p.id === planId)
  }

  return (
    <div className="card-gradient rounded-xl p-6 border border-border/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">{t("servers.myServers")}</h2>
      </div>

      {servers.length === 0 ? (
        <div className="text-center py-12">
          <Server className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground mb-4">{t("servers.noServers")}</p>
          <p className="text-sm text-muted-foreground mb-4">{t("servers.createFirstDesc")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {servers.map((server) => {
            const plan = getPlan(server.serverPlanId)
            const expiresAt = new Date(server.expiresAt)
            const daysLeft = Math.ceil((expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))

            return (
              <div
                key={server.id}
                className="bg-background/30 rounded-lg p-4 border border-border/30 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Server className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{server.serverName}</h3>
                      <p className="text-sm text-muted-foreground">192.168.1.{Math.floor(Math.random() * 255)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={server.status === "active" ? "default" : "secondary"} className="capitalize">
                      {server.status === "active" ? t("servers.running") : t("servers.stopped")}
                    </Badge>
                    {/* Удалены действия управления сервером */}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">{t("servers.plan")}</p>
                    <p className="text-sm font-medium text-foreground">
                      {plan ? (language === "ru" ? plan.nameRu : plan.name) : "N/A"}
                      {/* Dual EPYC 7702 мес/час, если план соответсвует */}
                      {plan?.cpu && plan.cpu === "Dual EPYC 7702" && (
                        <span className="ml-2 text-[.85em] text-muted-foreground font-normal">(мес/час)</span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("plan.cpu")}</p>
                    <p className="text-sm font-medium text-foreground">
                      {plan?.cores || plan?.cpu || "N/A"} {t("plan.cores")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("plan.ram")}</p>
                    <p className="text-sm font-medium text-foreground">
                      {plan?.ram || "N/A"} GB DDR4
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("plan.storage")}</p>
                    <p className="text-sm font-medium text-foreground">
                      {plan?.storage || "N/A"} GB NVMe
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("servers.expiresIn")}</p>
                    <p className={`text-sm font-medium ${daysLeft < 7 ? "text-destructive" : "text-foreground"}`}>
                      {daysLeft} {t("servers.days")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="text-sm text-muted-foreground">
                    {t("servers.paid")}: {formatPrice(convertPrice(server.pricePaid))} /{" "}
                    {t(`servers.${server.billingPeriod}`)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
