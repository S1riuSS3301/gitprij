"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Currency = "USD" | "RUB"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (price: number) => string
  convertPrice: (priceUSD: number) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

// Exchange rate: 1 USD = 95 RUB (approximate)
const EXCHANGE_RATE = 95

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("USD")

  // Load currency preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("preferred_currency")
    if (saved === "USD" || saved === "RUB") {
      setCurrencyState(saved)
    }
  }, [])

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency)
    localStorage.setItem("preferred_currency", newCurrency)
  }

  const convertPrice = (priceUSD: number): number => {
    if (currency === "RUB") {
      return priceUSD * EXCHANGE_RATE
    }
    return priceUSD
  }

  const formatPrice = (priceUSD: number): string => {
    const converted = convertPrice(priceUSD)
    if (currency === "RUB") {
      return `${converted.toFixed(2)} ₽`
    }
    return `$${converted.toFixed(2)}`
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
