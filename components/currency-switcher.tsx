"use client"

import { useCurrency } from "@/contexts/currency-context"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setCurrency(currency === "USD" ? "RUB" : "USD")}
      className="gap-2"
    >
      <DollarSign className="w-4 h-4" />
      {currency}
    </Button>
  )
}
