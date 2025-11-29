"use client"

import { Server, Wrench, MessageCircle, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion" // Добавляем framer-motion для анимаций

const menuItems = [
  { icon: Server, labelKey: "sidebar.virtualServer", href: "/" },
  { icon: Wrench, labelKey: "sidebar.myServices", href: "/dashboard" },
  { icon: MessageCircle, labelKey: "sidebar.support", href: "/dashboard/support" },
  { icon: Users, labelKey: "sidebar.referrals", href: "/dashboard/referrals" },
]

export function Sidebar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <motion.aside 
      className="w-64 border-r border-border/40 bg-sidebar/60 backdrop-blur-md hidden lg:block sticky top-0 h-screen shadow-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Убрали лого */}
      <nav className="p-8 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden",
                  isActive
                    ? "bg-primary/90 text-primary-foreground shadow-md shadow-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40 hover:shadow-sm",
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primary rounded-r-full transition-all duration-300",
                    isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0",
                  )}
                />

                <Icon
                  className={cn(
                    "w-5 h-5 transition-all duration-300",
                    isActive ? "scale-110 text-primary-foreground" : "group-hover:scale-110 group-hover:text-primary",
                  )}
                />

                <span
                  className={cn(
                    "font-medium text-base transition-all duration-300", // увеличили text-base вместо text-sm
                    isActive ? "font-bold" : "group-hover:translate-x-1 group-hover:font-semibold",
                  )}
                >
                  {t(item.labelKey)}
                </span>

                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-50 rounded-xl" />
                )}
              </Link>
            </motion.div>
          )
        })}
      </nav>
    </motion.aside>
  )
}