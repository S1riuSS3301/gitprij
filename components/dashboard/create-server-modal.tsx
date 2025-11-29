"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Cpu, Server, HardDrive, Network, Check, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/contexts/currency-context"

const allPlans = [
  // DDR5 Plans
  { id: "p1", cpu: 2, ram: 2, ramType: "DDR5", storage: 35, storageType: "NVMe", price: 6, pricePerHour: 0.02, name: "2 Cores | 2 GB DDR5 | 35 GB", popular: false },
  { id: "p2", cpu: 2, ram: 4, ramType: "DDR5", storage: 55, storageType: "NVMe", price: 10, pricePerHour: 0.03, name: "2 Cores | 4 GB DDR5 | 55 GB", popular: false },
  { id: "p3", cpu: 4, ram: 6, ramType: "DDR5", storage: 85, storageType: "NVMe", price: 18, pricePerHour: 0.04, name: "4 Cores | 6 GB DDR5 | 85 GB", popular: false },
  { id: "p4", cpu: 4, ram: 8, ramType: "DDR5", storage: 115, storageType: "NVMe", price: 23, pricePerHour: 0.05, name: "4 Cores | 8 GB DDR5 | 115 GB", popular: false },
  { id: "p5", cpu: 5, ram: 10, ramType: "DDR5", storage: 155, storageType: "NVMe", price: 29, pricePerHour: 0.07, name: "5 Cores | 10 GB DDR5 | 155 GB", popular: false },
  { id: "p6", cpu: 6, ram: 12, ramType: "DDR5", storage: 185, storageType: "NVMe", price: 35, pricePerHour: 0.09, name: "6 Cores | 12 GB DDR5 | 185 GB", popular: false },
  { id: "p7", cpu: 8, ram: 16, ramType: "DDR5", storage: 275, storageType: "NVMe", price: 49, pricePerHour: 0.11, name: "8 Cores | 16 GB DDR5 | 275 GB", popular: false },
  { id: "p8", cpu: 10, ram: 20, ramType: "DDR5", storage: 325, storageType: "NVMe", price: 60, pricePerHour: 0.13, name: "10 Cores | 20 GB DDR5 | 325 GB", popular: false },
  { id: "p9", cpu: 12, ram: 24, ramType: "DDR5", storage: 365, storageType: "NVMe", price: 75, pricePerHour: 0.16, name: "12 Cores | 24 GB DDR5 | 365 GB", popular: false },
  { id: "p10", cpu: 14, ram: 28, ramType: "DDR5", storage: 400, storageType: "NVMe", price: 88, pricePerHour: 0.18, name: "14 Cores | 28 GB DDR5 | 400 GB", popular: false },
  { id: "p11", cpu: 16, ram: 32, ramType: "DDR5", storage: 500, storageType: "NVMe", price: 99, pricePerHour: 0.20, name: "16 Cores | 32 GB DDR5 | 500 GB", popular: false },
  // DDR4 Plans
  { id: "p12", cpu: 2, ram: 2, ramType: "DDR4", storage: 35, storageType: "NVMe", price: 4, pricePerHour: 0.02, name: "2 Ядра | 2 GB DDR4 | 35 GB", popular: false },
  { id: "p13", cpu: 2, ram: 4, ramType: "DDR4", storage: 55, storageType: "NVMe", price: 6, pricePerHour: 0.04, name: "2 Ядра | 4 GB DDR4 | 55 GB", popular: false },
  { id: "p14", cpu: 3, ram: 4, ramType: "DDR4", storage: 65, storageType: "NVMe", price: 8, pricePerHour: 0.05, name: "3 Ядра | 4 GB DDR4 | 65 GB", popular: false },
  { id: "p15", cpu: 4, ram: 6, ramType: "DDR4", storage: 85, storageType: "NVMe", price: 11, pricePerHour: 0.06, name: "4 Ядра | 6 GB DDR4 | 85 GB", popular: false },
  { id: "p16", cpu: 4, ram: 8, ramType: "DDR4", storage: 115, storageType: "NVMe", price: 15, pricePerHour: 0.08, name: "4 Ядра | 8 GB DDR4 | 115 GB", popular: false },
  { id: "p17", cpu: 5, ram: 10, ramType: "DDR4", storage: 140, storageType: "NVMe", price: 18, pricePerHour: 0.09, name: "5 Ядер | 10 GB DDR4 | 140 GB", popular: false },
  { id: "p18", cpu: 6, ram: 12, ramType: "DDR4", storage: 160, storageType: "NVMe", price: 22, pricePerHour: 0.12, name: "6 Ядер | 12 GB DDR4 | 160 GB", popular: false },
  { id: "p19", cpu: 8, ram: 16, ramType: "DDR4", storage: 200, storageType: "NVMe", price: 26, pricePerHour: 0.14, name: "8 Ядер | 16 GB DDR4 | 200 GB", popular: false },
  { id: "p20", cpu: 10, ram: 20, ramType: "DDR4", storage: 250, storageType: "NVMe", price: 32, pricePerHour: 0.18, name: "10 Ядер | 20 GB DDR4 | 250 GB", popular: false },
  { id: "p21", cpu: 12, ram: 24, ramType: "DDR4", storage: 300, storageType: "NVMe", price: 36, pricePerHour: 0.22, name: "12 Ядер | 24 GB DDR4 | 300 GB", popular: false },
  { id: "p22", cpu: 14, ram: 28, ramType: "DDR4", storage: 300, storageType: "NVMe", price: 40, pricePerHour: 0.26, name: "14 Ядер | 28 GB DDR4 | 300 GB", popular: false },
  { id: "p23", cpu: 16, ram: 32, ramType: "DDR4", storage: 300, storageType: "NVMe", price: 47, pricePerHour: 0.31, name: "16 Ядер | 32 GB DDR4 | 300 GB", popular: false },
  { id: "p24", cpu: 20, ram: 40, ramType: "DDR4", storage: 300, storageType: "NVMe", price: 55, pricePerHour: 0.37, name: "20 Ядер | 40 GB DDR4 | 300 GB", popular: false },
  { id: "p25", cpu: 24, ram: 48, ramType: "DDR4", storage: 350, storageType: "NVMe", price: 62, pricePerHour: 0.45, name: "24 Ядра | 48 GB DDR4 | 350 GB", popular: false },
  { id: "p26", cpu: 28, ram: 56, ramType: "DDR4", storage: 400, storageType: "NVMe", price: 71, pricePerHour: 0.53, name: "28 Ядер | 56 GB DDR4 | 400 GB", popular: false },
  { id: "p27", cpu: 32, ram: 64, ramType: "DDR4", storage: 450, storageType: "NVMe", price: 85, pricePerHour: 0.61, name: "32 Ядра | 64 GB DDR4 | 450 GB", popular: false },
  { id: "p28", cpu: 36, ram: 72, ramType: "DDR4", storage: 500, storageType: "NVMe", price: 100, pricePerHour: 0.73, name: "36 Ядер | 72 GB DDR4 | 500 GB", popular: false },
  { id: "p29", cpu: 48, ram: 96, ramType: "DDR4", storage: 600, storageType: "NVMe", price: 138, pricePerHour: 1.03, name: "48 Ядер | 96 GB DDR4 | 600 GB", popular: false },
  { id: "p30", cpu: 56, ram: 112, ramType: "DDR4", storage: 650, storageType: "NVMe", price: 156, pricePerHour: 1.24, name: "56 Ядер | 112 GB DDR4 | 650 GB", popular: false },
  { id: "p31", cpu: 64, ram: 128, ramType: "DDR4", storage: 700, storageType: "NVMe", price: 175, pricePerHour: 1.52, name: "64 Ядра | 128 GB DDR4 | 700 GB", popular: false },
  { id: "p32", cpu: 72, ram: 128, ramType: "DDR4", storage: 700, storageType: "NVMe", price: 201, pricePerHour: 1.86, name: "72 Ядра | 128 GB DDR4 | 700 GB", popular: false },
  { id: "p33", cpu: 80, ram: 132, ramType: "DDR4", storage: 750, storageType: "NVMe", price: 265, pricePerHour: 2.25, name: "80 Ядер | 132 GB DDR4 | 750 GB", popular: false },
  { id: "p34", cpu: 88, ram: 156, ramType: "DDR4", storage: 800, storageType: "NVMe", price: 289, pricePerHour: 2.77, name: "88 Ядер | 156 GB DDR4 | 800 GB", popular: false },
  { id: "p35", cpu: 96, ram: 192, ramType: "DDR4", storage: 900, storageType: "NVMe", price: 326, pricePerHour: 3.36, name: "96 Ядер | 192 GB DDR4 | 900 GB", popular: false },
  { id: "p36", cpu: 112, ram: 224, ramType: "DDR4", storage: 1024, storageType: "NVMe", price: 395, pricePerHour: 5.72, name: "112 Ядер | 224 GB DDR4 | 1024 GB", popular: false },
  { id: "p37", cpu: 128, ram: 256, ramType: "DDR4", storage: 1024, storageType: "NVMe", price: 445, pricePerHour: 8.20, name: "128 Ядер | 256 GB DDR4 | 1024 GB", popular: false },
];

export function CreateServerModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { t } = useLanguage()
  const { currency, formatPrice } = useCurrency()
  const router = useRouter()

  const [plans, setPlans] = useState(allPlans)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [serverName, setServerName] = useState("")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly" | "yearly">("monthly")
  const [loading, setLoading] = useState(false)
  const [userBalance, setUserBalance] = useState(0)

  useEffect(() => {
    if (open) {
      fetch("/api/profile", { cache: "no-store" })
        .then(res => res.ok ? res.json() : { balance: 0 })
        .then(profile => setUserBalance(profile.balance || 0))
      if (!selectedPlan && plans.length > 0) setSelectedPlan(plans[0].id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const calculatePrice = (base: number) =>
    billingPeriod === "monthly" ? base :
      billingPeriod === "quarterly" ? base * 3 * 0.95 : base * 12 * 0.9

  const selectedPlanData = plans.find(p => p.id === selectedPlan)
  const totalPrice = selectedPlanData ? calculatePrice(selectedPlanData.price) : 0

  const hasInsufficientBalance =
    (currency as string) === "RUB" ? userBalance / 95 < totalPrice : userBalance < totalPrice

  const handleCreate = async () => {
    if (!selectedPlan || !serverName.trim()) {
      alert(t("servers.fillAllFields"))
      return
    }
    setLoading(true)
    try {
      const plan = plans.find(p => p.id === selectedPlan)
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          server_plan_id: plan?.id,
          billing_period: billingPeriod,
          server_name: serverName
        })
      })
      if (!res.ok) {
        const err = await res.json()
        alert(err?.error || t("servers.createError"))
        return
      }
      alert(t("servers.createSuccess"))
      onOpenChange(false)
      setServerName("")
      router.refresh()
    } catch {
      alert(t("servers.createError"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[92vh] overflow-y-auto p-8 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold text-center mb-6">⚙️ {t("servers.createServer")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          <div>
            <Label htmlFor="serverName" className="text-lg font-semibold">{t("servers.serverName")}</Label>
            <Input
              id="serverName"
              placeholder="My VPS Server"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="h-12 text-lg rounded-xl mt-2"
            />
          </div>

          {/* Billing Period */}
          <div>
            <Label className="text-lg font-semibold mb-3 block">{t("servers.billingPeriod")}</Label>
            <div className="grid grid-cols-3 gap-4">
              {["monthly", "quarterly", "yearly"].map(period => (
                <Button
                  key={period}
                  type="button"
                  variant={billingPeriod === period ? "default" : "outline"}
                  onClick={() => setBillingPeriod(period as any)}
                  className={`h-20 text-lg font-semibold rounded-xl flex flex-col justify-center items-center ${
                    billingPeriod === period ? "shadow-md scale-105 transition-transform" : ""
                  }`}
                >
                  {t(`servers.${period}`)}
                  {period === "quarterly" && <span className="text-sm opacity-80">-5%</span>}
                  {period === "yearly" && <span className="text-sm opacity-80">-10%</span>}
                </Button>
              ))}
            </div>
          </div>

          {/* Plans */}
          <div>
            <Label className="text-lg font-semibold mb-3 block">{t("servers.selectPlan")}</Label>
            <div className="overflow-x-auto py-4">
              <div className="flex gap-6 min-w-max">
                {plans.map(plan => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-transform hover:shadow-xl hover:scale-[1.02] min-w-[220px] ${
                      selectedPlan === plan.id ? "border-primary bg-primary/5 shadow-md" : "border-border/60 hover:border-primary/50"
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 right-3 bg-gradient-to-r from-primary to-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        POPULAR
                      </Badge>
                    )}
                    {selectedPlan === plan.id && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                        <Check className="w-5 h-5" />
                      </div>
                    )}

                    <h3 className="font-bold text-lg text-center mb-4">{plan.name}</h3>

                    <div className="text-center mb-4">
                      <div className="text-2xl font-extrabold text-primary">${plan.price}/мес</div>
                      <div className="text-sm text-muted-foreground">${plan.pricePerHour}/час</div>
                    </div>

                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Cpu className="text-primary w-4 h-4" />
                        {plan.cpu} Cores
                      </div>
                      <div className="flex items-center gap-2">
                        <Server className="text-primary w-4 h-4" />
                        {plan.ram} GB {plan.ramType}
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="text-primary w-4 h-4" />
                        {plan.storage} GB {plan.storageType}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {hasInsufficientBalance && selectedPlanData && (
            <Alert variant="destructive" className="text-lg">
              <AlertCircle className="h-6 w-6" />
              <AlertDescription>
                {t("servers.insufficientBalance")} — {t("servers.currentBalance")}: {formatPrice((currency as string) === "RUB" ? userBalance / 95 : userBalance)}
              </AlertDescription>
            </Alert>
          )}

          {selectedPlanData && (
            <div className="bg-muted/50 border rounded-2xl p-6 text-lg space-y-3 shadow-inner">
              <div className="flex justify-between"><span className="text-muted-foreground">{t("servers.selectedPlan")}:</span><span className="font-semibold">{selectedPlanData.name}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{t("servers.billingPeriod")}:</span><span className="font-semibold">{t(`servers.${billingPeriod}`)}</span></div>
              <div className="flex justify-between items-center pt-3 border-t"><span className="text-xl font-semibold">{t("servers.total")}:</span><span className="text-primary text-3xl font-extrabold">{formatPrice(totalPrice)}</span></div>
            </div>
          )}

          <div className="flex gap-4 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading} className="flex-1 h-14 text-lg font-semibold rounded-xl">{t("common.cancel")}</Button>
            <Button onClick={handleCreate} disabled={!selectedPlan || !serverName.trim() || loading || hasInsufficientBalance} className="flex-1 h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg">
              {loading ? t("common.creating") : t("servers.create")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
