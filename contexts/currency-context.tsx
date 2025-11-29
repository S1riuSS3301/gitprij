"use client"

import { createContext, useContext, type ReactNode } from "react"

type Currency = "USD"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (price: number) => string
  convertPrice: (priceUSD: number) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const currency: Currency = "USD"

  const setCurrency = (newCurrency: Currency) => {
    // No-op, always USD
  }

  const convertPrice = (priceUSD: number): number => {
    return priceUSD
  }

  const formatPrice = (priceUSD: number): string => {
    return `$${priceUSD.toFixed(2)}`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider")
  }
  return context
}
