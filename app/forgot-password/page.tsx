"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ForgotPasswordPage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen gradient-purple flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4">
            {t("auth.backToHome")}
          </Button>
        </Link>
        <div className="card-gradient rounded-xl p-6 border border-border/50 shadow-2xl">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("login.forgotPassword")}</h1>
          {sent ? (
            <p className="text-sm text-muted-foreground">
              {t("common.emailSent", { defaultValue: "Если email существует, мы отправили письмо для сброса пароля." })}
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">{t("common.send", { defaultValue: "Отправить" })}</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}


