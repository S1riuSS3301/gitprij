"use client"

import { Server, Wrench, MessageCircle, Users, LayoutDashboard, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const menuItems = [
    { icon: LayoutDashboard, label: t("dashboard.title"), href: "/dashboard" },
    { icon: Server, label: t("servers.myServers"), href: "/dashboard/servers" },
    { icon: Wrench, label: t("sidebar.myServices"), href: "/dashboard/services" },
    { icon: CreditCard, label: t("dashboard.billing"), href: "/dashboard/billing" },
    { icon: Users, label: t("dashboard.referrals"), href: "/dashboard/referrals" },
    { icon: MessageCircle, label: t("sidebar.support"), href: "/dashboard/support" },
  ]

  return (
    <aside className="w-64 border-r border-border/50 bg-sidebar/50 backdrop-blur-sm hidden lg:block">
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg glow-effect"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
