"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { CurrencySwitcher } from "@/components/currency-switcher"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/profile")
        setIsAuthenticated(response.ok)
      } catch {
        setIsAuthenticated(false)
      }
    }
    checkAuth()
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  return (
    <header className="border-b-2 border-border/30 backdrop-blur-md bg-background/70 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <span className="text-primary-foreground font-bold text-xl">V</span>
          </div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">VDS_HUB</h1>
        </Link>

        <div className="flex items-center gap-3">
          <CurrencySwitcher />
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2 font-medium">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{t(`header.${language}`)}</span>
          </Button>
          {isAuthenticated ? (
            <Link href="/dashboard">
              <Button size="sm" className="bg-primary hover:bg-primary/90 font-semibold shadow-sm hover:shadow-md">
                {t("header.dashboard")}
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm" className="font-semibold bg-transparent">
                  {t("header.login")}
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-primary hover:bg-primary/90 font-semibold shadow-sm hover:shadow-md">
                  {t("header.register")}
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
