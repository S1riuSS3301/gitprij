"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, Server, Gift } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

type TxType = "deposit" | "purchase" | "referral" | "withdrawal"

interface TxItem {
  id: string
  type: TxType
  description?: string | null
  methodText?: string | null
  amount: number
  status: "pending" | "completed" | "failed"
  createdAt: string
}

export function TransactionHistory() {
  const [items, setItems] = useState<TxItem[]>([])
  const [loading, setLoading] = useState(true)
  const { t, language } = useLanguage()

  useEffect(() => {
    let ignore = false
    const load = async () => {
      try {
        const res = await fetch("/api/transactions", { cache: "no-store" })
        if (!res.ok) return
        const data = await res.json()
        if (!ignore) {
          const mapped: TxItem[] = data.map((t: any) => ({
            id: t.id,
            type: t.type,
            description: t.description,
            methodText: t.methodText,
            amount: Number(t.amount || 0),
            status: t.status,
            createdAt: t.createdAt,
          }))
          setItems(mapped)
        }
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [])

  const fmtAmount = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Math.abs(n))
  const fmtDate = (iso: string) => new Date(iso).toLocaleString("ru-RU")

  return (
    <div className="card-gradient rounded-xl p-6 border border-border/50">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {language === "ru" ? "История транзакций" : "Transaction history"}
      </h2>

      {loading ? (
        <div className="text-sm text-muted-foreground">
          {language === "ru" ? "Загрузка…" : "Loading…"}
        </div>
      ) : (
        <div className="space-y-3">
          {items.length === 0 && (
            <div className="text-sm text-muted-foreground">
              {language === "ru" ? "Пока нет транзакций" : "No transactions yet"}
            </div>
          )}
          {items.map((t) => {
            const Icon =
              t.type === "deposit"
                ? ArrowUpRight
                : t.type === "referral"
                  ? Gift
                  : t.type === "withdrawal"
                    ? ArrowDownRight
                    : Server
            const positive = t.type === "deposit" || t.type === "referral"
            return (
              <div
                key={t.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/50 transition-all"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${positive ? "bg-green-500/20" : "bg-red-500/20"}`}>
                  <Icon className={`w-5 h-5 ${positive ? "text-green-400" : "text-red-400"}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{
                    t.description || (positive ? (language === "ru" ? "Пополнение баланса" : "Balance top-up") : (language === "ru" ? "Операция" : "Operation"))
                  }</p>
                  {t.methodText && <p className="text-xs text-muted-foreground">{t.methodText}</p>}
                </div>

                <div className="text-right">
                  <p className={`text-sm font-semibold ${positive ? "text-green-400" : "text-red-400"}`}>
                    {positive ? "+" : "-"}{fmtAmount(t.amount)}
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    {t.status && (
                      <Badge
                        variant={t.status === "completed" ? "secondary" : "outline"}
                        className={`text-[11px] ${t.status === "completed" ? "bg-green-500/15" : ""}`}
                      >
                        {t.status === "completed"
                          ? (language === "ru" ? "Завершено" : "Completed")
                          : t.status === "pending"
                            ? (language === "ru" ? "В обработке" : "Pending")
                            : (language === "ru" ? "Ошибка" : "Failed")}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">{fmtDate(t.createdAt)}</span>
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
