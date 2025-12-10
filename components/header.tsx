"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { FaWallet, FaServer, FaSignInAlt, FaUserPlus, FaThLarge, FaTelegram, FaBell } from "react-icons/fa"
import Image from "next/image"

export function Header() {
  const t = useTranslations('navigation')
  const tDashboard = useTranslations('dashboard')
  const locale = useLocale()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [balance, setBalance] = useState<number | null>(null)
  const [serversCount, setServersCount] = useState<number>(0)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/user", { cache: "no-store" })
        setIsAuthenticated(response.ok)
        if (response.ok) {
          const [profileRes, ordersRes] = await Promise.all([
            fetch("/api/profile", { cache: "no-store" }),
            fetch("/api/orders", { cache: "no-store" }),
          ])
          if (profileRes.ok) {
            const p = await profileRes.json()
            setBalance(typeof p?.balance === "number" ? p.balance : 0)
          } else {
            setBalance(0)
          }
          if (ordersRes.ok) {
            const o = await ordersRes.json()
            setServersCount(Array.isArray(o) ? o.length : 0)
          }
        } else {
          setBalance(null)
          setServersCount(0)
        }
      } catch {
        setIsAuthenticated(false)
      }
    }
    checkAuth()
  }, [])

  return (
    <motion.header
      className="border-b-2 border-border/30 backdrop-blur-lg bg-background/80 sticky top-0 z-50 shadow-md"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Логотип строго в самом левом углу: absolute left-0, без margin/padding */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-50">
          <Link href={`/${locale}`} className="flex items-center">
           
              <Image
                src="/logo-vds-hub.png"
                alt="VDS Hub Logo"
                width={94}
                height={94}
                className="block"
                style={{ filter: "drop-shadow(0 0 18px #8c6cfa33)" }}
              />
            
          </Link>
        </div>

        {/* Placeholder без padding слева, с отступом ml-[44px] для избежания перекрытия */}
        <div className="flex-1 flex ml-[44px]">
          
          
        </div>

        <motion.div
          className="flex items-center gap-4 sm:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="inline-flex rounded-full px-4 py-2 border font-semibold border-primary/40 bg-primary/5 transition-all duration-300 ease-out text-sm"
            onClick={() => router.replace(`/${locale === "ru" ? "en" : "ru"}`)}
          >
            {locale === "ru" ? "EN" : "RU"}
          </Button>
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex rounded-full px-3 py-2 text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => router.push("/dashboard/billing")}
            >
              <FaWallet size={17} />
            </Button>
          )}
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex rounded-full px-3 py-2 text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open("https://t.me/VDS_HUB", "_blank")}
            >
              <FaTelegram size={17} />
            </Button>
          )}
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex rounded-full px-3 py-2 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <FaBell size={17} />
            </Button>
          )}
          {isAuthenticated ? (
            <motion.div transition={{ duration: 0.3, ease: "easeOut" }}>
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="rounded-full px-5 py-2 bg-primary text-white font-extrabold shadow-md text-base transition-all duration-300 border border-primary/70 flex gap-2 items-center"
                >
                  <FaThLarge size={17} /> {t("dashboard")}
                </Button>
              </Link>
            </motion.div>
          ) : (
            <>
              <motion.div transition={{ duration: 0.3, ease: "easeOut" }}>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-4 py-2 font-bold border border-primary/25 bg-transparent transition-all duration-300 text-sm flex gap-2 items-center"
                  >
                    <FaSignInAlt size={16} /> {t("login")}
                  </Button>
                </Link>
              </motion.div>
              <motion.div transition={{ duration: 0.3, ease: "easeOut" }}>
                <Link href="/register">
                  <Button
                    size="sm"
                    className="rounded-full px-5 py-2 bg-primary text-white font-extrabold border border-primary/70 shadow-md text-base transition-all duration-300 flex gap-2 items-center"
                  >
                    <FaUserPlus size={16} /> {t("register")}
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </motion.header>
  )
}
