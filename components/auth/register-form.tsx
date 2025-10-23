"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signUp } from "@/lib/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function RegisterForm() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError(t("register.passwordMismatch"))
      return
    }

    if (!acceptTerms) {
      setError(t("register.acceptTermsError"))
      return
    }

    if (password.length < 8) {
      setError(t("register.passwordTooShort"))
      return
    }

    setIsLoading(true)

    try {
      const result = await signUp(email, password, fullName)

      if (result.error) {
        setError(result.error)
      } else {
        router.push("/dashboard")
        router.refresh()
      }
    } catch (err: any) {
      setError(t("register.error"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="fullName" className="text-sm text-foreground">
          {t("register.fullName")} <span className="text-destructive">{t("register.required")}</span>
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="bg-background/50 border-border/50 focus:border-primary h-10"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-sm text-foreground">
          {t("register.email")} <span className="text-destructive">{t("register.required")}</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background/50 border-border/50 focus:border-primary h-10"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password" className="text-sm text-foreground">
          {t("register.password")} <span className="text-destructive">{t("register.required")}</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="bg-background/50 border-border/50 focus:border-primary pr-10 h-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">{t("register.passwordMinLength")}</p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="confirm-password" className="text-sm text-foreground">
          {t("register.confirmPassword")} <span className="text-destructive">{t("register.required")}</span>
        </Label>
        <div className="relative">
          <Input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="bg-background/50 border-border/50 focus:border-primary pr-10 h-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2 pt-1">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setAcceptTerms(checked === true)}
          className="mt-0.5"
        />
        <Label htmlFor="terms" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
          {t("register.acceptTerms")}{" "}
          <Link href="/terms" className="text-primary hover:underline">
            {t("register.terms")}
          </Link>{" "}
          {t("register.and")}{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            {t("register.privacy")}
          </Link>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 h-10 mt-4"
        disabled={isLoading || !acceptTerms}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {t("register.creating")}
          </>
        ) : (
          t("register.createButton")
        )}
      </Button>
    </form>
  )
}
