"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check, Share2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ReferralLink() {
  const [copied, setCopied] = useState(false)
  const [referralCode, setReferralCode] = useState("")
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const loadReferralCode = async () => {
      try {
        const res = await fetch("/api/referrals", { cache: "no-store" })
        if (res.ok) {
          const data = await res.json()
          setReferralCode(data.referralCode || "")
        }
      } catch (error) {
        console.error("Failed to load referral code:", error)
      } finally {
        setLoading(false)
      }
    }
    loadReferralCode()
  }, [])

  const referralLink = referralCode 
    ? `${typeof window !== 'undefined' ? window.location.origin : ''}/register?ref=${referralCode}`
    : ""

  const copyToClipboard = () => {
    if (!referralLink) return
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card-gradient rounded-xl p-6 lg:p-8 border border-border/50">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Share2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground mb-1">
            {language === "ru" ? "Ваша реферальная ссылка" : "Your Referral Link"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {language === "ru" 
              ? "Поделитесь этой ссылкой с друзьями и получайте 10% от их пополнений"
              : "Share this link with friends and earn 10% from their top-ups"
            }
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Input 
          value={loading ? (language === "ru" ? "Загрузка..." : "Loading...") : referralLink} 
          readOnly 
          className="bg-background/50 border-border/50 font-mono text-sm" 
          disabled={loading}
        />
        <Button 
          onClick={copyToClipboard} 
          className="bg-primary hover:bg-primary/90 gap-2 min-w-[120px]"
          disabled={loading || !referralLink}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              {language === "ru" ? "Скопировано" : "Copied"}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              {language === "ru" ? "Копировать" : "Copy"}
            </>
          )}
        </Button>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
        <p className="text-sm text-foreground">
          <span className="font-semibold">
            {language === "ru" ? "Как это работает:" : "How it works:"}
          </span>{" "}
          {language === "ru"
            ? "Когда кто-то регистрируется по вашей ссылке и пополняет баланс, вы получаете 10% от суммы пополнения на свой счет. Выплаты происходят автоматически."
            : "When someone registers using your link and tops up their balance, you get 10% of the top-up amount credited to your account. Payouts are automatic."
          }
        </p>
      </div>
    </div>
  )
}
