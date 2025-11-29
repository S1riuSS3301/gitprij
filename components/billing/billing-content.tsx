"use client"

import { BalanceCard } from "./balance-card"
import PaymentMethods from "./payment-methods"
import { TransactionHistory } from "./transaction-history"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { useEffect } from "react"

export function BillingContent() {
  const { t } = useLanguage()
  const { refresh } = useAuth()

  useEffect(() => {
    if (typeof window === "undefined") return

    const url = new URL(window.location.href)
    const tx = url.searchParams.get("tx")
    const id = url.searchParams.get("id")
    const state = url.searchParams.get("state")

    function cleanupUrl() {
      url.searchParams.delete("id")
      url.searchParams.delete("state")
      url.searchParams.delete("tx")
      window.history.replaceState({}, "", url.toString())
    }

    // 1. Обработка редиректа от CrystalPay
    if (id && state) {
      fetch("/api/crystalpay/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.success && data.paid) {
            await refresh()
            await fetch("/api/transactions", { cache: "no-store" })
          }
        })
        .finally(() => {
          cleanupUrl()
        })
      return
    }

    // 2. Поллинг по tx (для других провайдеров)
    if (tx) {
      let active = true
      const until = Date.now() + 60_000
      const poll = async () => {
        if (!active) return
        try {
          await Promise.all([
            fetch("/api/profile", { cache: "no-store" }),
            fetch("/api/transactions", { cache: "no-store" }),
          ])
        } catch {}
        if (Date.now() < until) {
          setTimeout(poll, 3000)
        } else {
          cleanupUrl()
        }
      }
      poll()
      return () => {
        active = false
      }
    }
  }, [refresh])

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("dashboard.billing")}</h1>
        <p className="text-muted-foreground">
          {t("dashboard.billing") === "Billing"
            ? "Manage your balance and payments"
            : "Управление балансом и платежами"}
        </p>
      </div>

      <BalanceCard />
      <PaymentMethods />
      <TransactionHistory />
    </div>
  )
}
