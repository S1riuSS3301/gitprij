"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useCurrency } from "@/contexts/currency-context"
import { useLanguage } from "@/contexts/language-context"

type BillingPeriod = "hour" | "month" | "3months" | "year"

interface ServerPlan {
  name: string
  cores: number
  ram: number
  storage: number
  prices: Record<BillingPeriod, number>
  popular?: boolean
}

interface ServerPlanCardProps {
  plan: ServerPlan
  billingPeriod: BillingPeriod
  onSelect?: () => void
}

export function ServerPlanCard({ plan, billingPeriod, onSelect }: ServerPlanCardProps) {
  const { formatPrice, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const price = plan.prices[billingPeriod]
  const hourlyPrice = plan.prices.hour

  const periodLabels = {
    hour: t("plan.perHour"),
    month: t("plan.perMonth"),
    "3months": t("plan.per3Months"),
    year: t("plan.perYear"),
  }

  return (
    <Card
      className={`relative p-5 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect ${
        plan.popular ? "ring-2 ring-primary" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          {t("plan.popular")}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>
                {plan.ram} GB {t("plan.ram")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>
                {plan.storage} GB {t("plan.storage")}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-border/50">
          <div className="text-2xl font-bold text-foreground">
            {formatPrice(price)}
            <span className="text-sm font-normal text-muted-foreground"> / {periodLabels[billingPeriod]}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {formatPrice(hourlyPrice)} / {t("plan.perHour")}
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90" size="sm" onClick={onSelect}>
          {t("plan.select")}
        </Button>
      </div>
    </Card>
  )
}
