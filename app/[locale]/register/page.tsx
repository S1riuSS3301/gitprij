"use client"

import { Suspense } from "react"
import { RegisterForm } from "@/components/auth/register-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

function RegisterPageContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen gradient-purple flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t("auth.backToHome")}
          </Button>
        </Link>

        <div className="card-gradient rounded-xl p-6 border border-border/50 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex w-12 h-12 rounded-lg bg-primary items-center justify-center mb-3">
              <span className="text-primary-foreground font-bold text-xl">V</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-1">{t("auth.createAccount")}</h1>
            <p className="text-sm text-muted-foreground">{t("auth.joinToday")}</p>
          </div>

          <RegisterForm />

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              {t("auth.haveAccount")}{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                {t("auth.login")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterPageContent />
    </Suspense>
  )
}
