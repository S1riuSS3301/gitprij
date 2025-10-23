"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/contexts/currency-context"
import { Badge } from "@/components/ui/badge"
import { Server, Cpu, HardDrive, Network, Check, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ServerPlan {
  id: string
  name: string
  nameRu: string
  cpu: number
  ram: number
  storage: number
  bandwidth: number
  price: number
  popular: boolean
}

type BillingPeriod = "monthly" | "quarterly" | "yearly"

export function CreateServerModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { t, language } = useLanguage()
  const { currency, formatPrice } = useCurrency()
  const router = useRouter()
  const [plans, setPlans] = useState<ServerPlan[]>([])
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [serverName, setServerName] = useState("")
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("quarterly")
  const [loading, setLoading] = useState(false)
  const [userBalance, setUserBalance] = useState(0)

  useEffect(() => {
    if (open) {
      const storedPlans = JSON.parse(localStorage.getItem("serverPlans") || "[]")
      setPlans(storedPlans)
      if (storedPlans.length > 0 && !selectedPlan) {
        setSelectedPlan(storedPlans[0].id)
      }

      // Load user balance
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")
      const profiles = JSON.parse(localStorage.getItem("profiles") || "[]")
      const userProfile = profiles.find((p: any) => p.userId === currentUser.id)
      setUserBalance(userProfile?.balance || 0)
    }
  }, [open])

  const calculatePrice = (basePrice: number) => {
    let multiplier = 1
    if (billingPeriod === "monthly") multiplier = 1
    else if (billingPeriod === "quarterly")
      multiplier = 3 * 0.95 // 3 months with 5% discount
    else if (billingPeriod === "yearly") multiplier = 12 * 0.9 // 12 months with 10% discount
    return basePrice * multiplier
  }

  const handleCreate = async () => {
    if (!selectedPlan || !serverName.trim()) {
      alert(t("servers.fillAllFields"))
      return
    }

    setLoading(true)
    try {
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")
      const plan = plans.find((p) => p.id === selectedPlan)

      if (!plan) throw new Error("Plan not found")

      const priceUSD = calculatePrice(plan.price)
      const profiles = JSON.parse(localStorage.getItem("profiles") || "[]")
      const userProfile = profiles.find((p: any) => p.userId === currentUser.id)

      const balanceUSD = currency === "RUB" ? userProfile.balance / 95 : userProfile.balance

      if (!userProfile || balanceUSD < priceUSD) {
        alert(t("servers.insufficientBalance"))
        onOpenChange(false)
        router.push("/dashboard/billing")
        return
      }

      userProfile.balance = currency === "RUB" ? (balanceUSD - priceUSD) * 95 : balanceUSD - priceUSD
      localStorage.setItem("profiles", JSON.stringify(profiles))

      const orders = JSON.parse(localStorage.getItem("orders") || "[]")
      const expiresAt = new Date()
      if (billingPeriod === "monthly") expiresAt.setMonth(expiresAt.getMonth() + 1)
      else if (billingPeriod === "quarterly") expiresAt.setMonth(expiresAt.getMonth() + 3)
      else if (billingPeriod === "yearly") expiresAt.setFullYear(expiresAt.getFullYear() + 1)

      const newOrder = {
        id: Date.now().toString(),
        userId: currentUser.id,
        serverPlanId: selectedPlan,
        pricePaid: priceUSD,
        billingPeriod,
        serverName: serverName.trim(),
        status: "active",
        expiresAt: expiresAt.toISOString(),
        createdAt: new Date().toISOString(),
      }

      orders.push(newOrder)
      localStorage.setItem("orders", JSON.stringify(orders))

      alert(t("servers.createSuccess"))
      onOpenChange(false)
      setServerName("")
      router.refresh()
    } catch (error) {
      console.error("[v0] Error creating server:", error)
      alert(t("servers.createError"))
    } finally {
      setLoading(false)
    }
  }

  const selectedPlanData = plans.find((p) => p.id === selectedPlan)
  const totalPrice = selectedPlanData ? calculatePrice(selectedPlanData.price) : 0
  const hasInsufficientBalance = currency === "RUB" ? userBalance / 95 < totalPrice : userBalance < totalPrice

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t("servers.createServer")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Server Name */}
          <div className="space-y-2">
            <Label htmlFor="serverName" className="text-sm font-medium">
              {t("servers.serverName")}
            </Label>
            <Input
              id="serverName"
              placeholder="e.g., Web Server"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="h-11"
            />
          </div>

          {/* Billing Period */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">{t("servers.billingPeriod")}</Label>
            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant={billingPeriod === "monthly" ? "default" : "outline"}
                onClick={() => setBillingPeriod("monthly")}
                className="h-auto py-4 flex flex-col items-center gap-1"
              >
                <span className="font-semibold">{t("servers.monthly")}</span>
              </Button>
              <Button
                type="button"
                variant={billingPeriod === "quarterly" ? "default" : "outline"}
                onClick={() => setBillingPeriod("quarterly")}
                className="h-auto py-4 flex flex-col items-center gap-1"
              >
                <span className="font-semibold">{t("servers.quarterly")}</span>
                <span className="text-xs opacity-80">-5%</span>
              </Button>
              <Button
                type="button"
                variant={billingPeriod === "yearly" ? "default" : "outline"}
                onClick={() => setBillingPeriod("yearly")}
                className="h-auto py-4 flex flex-col items-center gap-1"
              >
                <span className="font-semibold">{t("servers.yearly")}</span>
                <span className="text-xs opacity-80">-10%</span>
              </Button>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">{t("servers.selectPlan")}</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => {
                const planPrice = calculatePrice(plan.price)
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative cursor-pointer rounded-xl border-2 p-5 transition-all hover:shadow-lg ${
                      selectedPlan === plan.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground">
                        {t("plan.popular")}
                      </Badge>
                    )}
                    {selectedPlan === plan.id && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}

                    <div className="text-center mb-4 pb-4 border-b">
                      <h3 className="font-bold text-lg mb-2">{language === "ru" ? plan.nameRu : plan.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-1">{formatPrice(planPrice)}</div>
                      <div className="text-xs text-muted-foreground">
                        /{" "}
                        {billingPeriod === "monthly"
                          ? t("servers.month")
                          : billingPeriod === "quarterly"
                            ? t("servers.quarter")
                            : t("servers.year")}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Cpu className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">
                          {plan.cpu} vCPU {t("plan.cpu")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Server className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">
                          {plan.ram} GB {t("plan.ram")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <HardDrive className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">
                          {plan.storage} GB SSD {t("plan.storage")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Network className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">
                          {plan.bandwidth} TB {t("plan.bandwidth")}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Insufficient Balance Warning */}
          {hasInsufficientBalance && selectedPlanData && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {t("servers.insufficientBalance")} {t("servers.currentBalance")}:{" "}
                {formatPrice(currency === "RUB" ? userBalance / 95 : userBalance)}
              </AlertDescription>
            </Alert>
          )}

          {/* Summary */}
          {selectedPlanData && (
            <div className="bg-muted/50 rounded-xl p-5 space-y-3 border">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground font-medium">{t("servers.selectedPlan")}:</span>
                <span className="font-semibold">
                  {language === "ru" ? selectedPlanData.nameRu : selectedPlanData.name}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground font-medium">{t("servers.billingPeriod")}:</span>
                <span className="font-semibold">{t(`servers.${billingPeriod}`)}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold pt-3 border-t">
                <span>{t("servers.total")}:</span>
                <span className="text-primary text-2xl">{formatPrice(totalPrice)}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 h-12"
              disabled={loading}
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="button"
              onClick={handleCreate}
              disabled={!selectedPlan || !serverName.trim() || loading || hasInsufficientBalance}
              className="flex-1 h-12 bg-primary hover:bg-primary/90 font-semibold"
            >
              {loading ? t("common.creating") : t("servers.create")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
