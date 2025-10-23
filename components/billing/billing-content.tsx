"use client"

import { BalanceCard } from "./balance-card"
import { PaymentMethods } from "./payment-methods"
import { TransactionHistory } from "./transaction-history"
import { useLanguage } from "@/contexts/language-context"

export function BillingContent() {
  const { t } = useLanguage()

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
