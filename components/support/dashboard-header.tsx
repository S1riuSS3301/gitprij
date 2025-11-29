"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Plus, Send, Menu, Wallet, Server as ServerIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "@/lib/actions/auth"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Sheet, SheetContent, SheetTrigger, SheetHeader as SheetHdr, SheetTitle } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion" // Добавляем для анимаций
import { useAuth } from "@/contexts/auth-context"

interface User {
  id: string 
  email: string
  name?: string
  role: string
}

interface Profile {
  fullName?: string
  balance: number
}

export function DashboardHeader() {
  const { t, language, setLanguage } = useLanguage()
  const { user } = useAuth()
  const profile = user?.profile
  const [orders, setOrders] = useState<any[]>([])

  // Загрузка заказов для бейджа VPS
  useEffect(() => {
    let ignore = false
    const load = async () => {
      try {
        const res = await fetch("/api/orders", { cache: "no-store" })
        const data = res.ok ? await res.json() : []
        if (!ignore) setOrders(Array.isArray(data) ? data : [])
      } catch {
        if (!ignore) setOrders([])
      }
    }
    load()
    return () => { ignore = true }
  }, [])

  if (!user) return null

  const initials = profile?.fullName
    ? profile.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user.email?.substring(0, 2).toUpperCase() || "U"

  return (
    <motion.header 
      className="border-b border-border/50 backdrop-blur-md bg-background/90 sticky top-0 z-50 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 relative">
        {/* Логотип строго в левом углу */}
        <motion.div 
          className="absolute left-4 sm:left-6 flex items-center z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/logo-vds-hub.png"
              alt="Логотип VDS_HUB"
              width={180}
              height={45}
              priority
              className="object-contain h-10 sm:h-12 w-auto"
            />
          </Link>
        </motion.div>

        <div className="flex-1" /> {/* Spacer */}

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-10">
          {profile && (
            <motion.div 
              className="hidden md:flex items-center gap-3 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-primary/40 hover:bg-primary/10 transition-all duration-300"
                onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
              >
                {language === "ru" ? "EN" : "RU"}
              </Button>
              <Link 
                href="/dashboard/billing"
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground hover:from-primary/20 hover:to-accent/20 hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <Wallet className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{language === "ru" ? "Баланс" : "Balance"}</span>
                <span className="font-semibold">${(profile.balance ?? 0).toFixed(2)}</span>
              </Link>
              <Link 
                href="/dashboard/servers"
                className="px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-foreground hover:bg-secondary/20 hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <ServerIcon className="w-4 h-4" aria-hidden="true" />
                <span>VPS</span>
                <span className="font-semibold">{orders?.length || 0}</span>
              </Link>
            </motion.div>
          )}

          {/* Mobile drawer/sheet menu с анимацией */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden p-2 hover:bg-secondary/20 transition-colors rounded-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 bg-background/95 backdrop-blur-md">
              <SheetHdr>
                <SheetTitle className="p-4 border-b">{language === "ru" ? "Меню" : "Menu"}</SheetTitle>
              </SheetHdr>
              <nav className="p-4 space-y-1">
                {[
                  { href: "/dashboard", label: t("dashboard.title") },
                  { href: "/dashboard/servers", label: t("servers.myServers") },
                  { href: "/dashboard/services", label: t("sidebar.myServices") },
                  { href: "/dashboard/billing", label: t("dashboard.billing") },
                  { href: "/dashboard/referrals", label: t("dashboard.referrals") },
                  { href: "/dashboard/support", label: t("sidebar.support") },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={item.href} className="block px-4 py-3 rounded-lg hover:bg-secondary/20 transition-colors">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                {user.role?.toLowerCase() === "admin" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link href="/admin" className="block px-4 py-3 rounded-lg hover:bg-secondary/20 transition-colors">
                      🛡️ {t("dashboard.adminPanel")}
                    </Link>
                  </motion.div>
                )}
              </nav>
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full rounded-full"
                  onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
                >
                  {language === "ru" ? "EN" : "RU"}
                </Button>
              </motion.div>
            </SheetContent>
          </Sheet>

          {/* Языковой переключатель для desktop */}
          <motion.button
            variant="outline"
            size="sm"
            className="gap-2 px-3 hidden xs:flex rounded-full border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm">{language === "ru" ? "RU" : "EN"}</span>
          </motion.button>

          {/* Пополнить баланс */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent hidden sm:flex rounded-full hover:shadow-md transition-all duration-300" asChild>
                  <Link href="/dashboard/billing">
                    <Plus className="w-4 h-4" />
                    <span className="hidden sm:inline">{t("dashboard.topUp")}</span>
                  </Link>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>{language === "ru" ? "Пополнить баланс" : "Top up balance"}</TooltipContent>
          </Tooltip>

          {/* Telegram support */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="relative hidden sm:inline-flex hover:bg-secondary/20 transition-colors rounded-full">
                  <Link href="https://t.me/VDS_HUB_Support" target="_blank">
                    <Send className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>Telegram</TooltipContent>
          </Tooltip>

          {/* Уведомления */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="relative hidden xs:inline-flex hover:bg-secondary/20 transition-colors rounded-full">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>{language === "ru" ? "Уведомления" : "Notifications"}</TooltipContent>
          </Tooltip>

          {/* Профиль пользователя */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-secondary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Avatar className="w-8 h-8 ring-2 ring-primary/20">
                  <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
                </Avatar>
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-md shadow-lg rounded-xl border border-border/50">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium">{profile?.fullName || user.email}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <Badge variant="secondary" className="w-fit text-xs capitalize bg-secondary/20">
                    {user.role.toLowerCase()}
                  </Badge>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem asChild className="hover:bg-secondary/20 transition-colors rounded-md mx-1">
                <Link href="/dashboard/profile">{t("dashboard.profile")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-secondary/20 transition-colors rounded-md mx-1">
                <Link href="/dashboard/billing">{t("dashboard.billing")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-secondary/20 transition-colors rounded-md mx-1">
                <Link href="/dashboard/referrals">{t("dashboard.referrals")}</Link>
              </DropdownMenuItem>
              {user.role?.toLowerCase() === "admin" && (
                <DropdownMenuItem asChild className="hover:bg-secondary/20 transition-colors rounded-md mx-1">
                  <Link href="/admin">{t("dashboard.adminPanel")}</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem
                className="text-destructive hover:bg-destructive/10 transition-colors rounded-md mx-1"
                onClick={async () => {
                  await signOut()
                }}
              >
                {t("dashboard.logout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}