"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useData } from "@/contexts/data-context"
import { useCurrency } from "@/contexts/currency-context"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ServerPlanCard } from "@/components/server-plan-card"

type BillingPeriod = "month"

// Изменили billingPeriods: оставили только "month"
const billingPeriods: BillingPeriod[] = ["month"]

// DDR5 PLANS
const serverPlansDDR5 = [
  {
    name: "2 vCore DDR5",
    cores: 2,
    ram: 2,
    storage: 35,
    ramType: "DDR5",
    prices: { month: 6, hour: 0.02 },
    nvme: false,
  },
  {
    name: "2 vCore DDR5",
    cores: 2,
    ram: 4,
    storage: 55,
    ramType: "DDR5",
    prices: { month: 10, hour: 0.03 },
    nvme: false,
  },
  {
    name: "4 vCore DDR5",
    cores: 4,
    ram: 6,
    storage: 85,
    ramType: "DDR5",
    prices: { month: 18, hour: 0.04 },
    nvme: false,
  },
  {
    name: "4 vCore DDR5",
    cores: 4,
    ram: 8,
    storage: 115,
    ramType: "DDR5",
    prices: { month: 23, hour: 0.05 },
    nvme: false,
  },
  {
    name: "5 vCore DDR5",
    cores: 5,
    ram: 10,
    storage: 155,
    ramType: "DDR5",
    prices: { month: 29, hour: 0.07 },
    nvme: false,
  },
  {
    name: "6 vCore DDR5",
    cores: 6,
    ram: 12,
    storage: 185,
    ramType: "DDR5",
    prices: { month: 35, hour: 0.09 },
    nvme: false,
  },
  {
    name: "8 vCore DDR5",
    cores: 8,
    ram: 16,
    storage: 275,
    ramType: "DDR5",
    prices: { month: 49, hour: 0.11 },
    nvme: false,
  },
  {
    name: "10 vCore DDR5",
    cores: 10,
    ram: 20,
    storage: 325,
    ramType: "DDR5",
    prices: { month: 60, hour: 0.13 },
    nvme: false,
  },
  {
    name: "12 vCore DDR5",
    cores: 12,
    ram: 24,
    storage: 365,
    ramType: "DDR5",
    prices: { month: 75, hour: 0.16 },
    nvme: false,
  },
  {
    name: "14 vCore DDR5",
    cores: 14,
    ram: 28,
    storage: 400,
    ramType: "DDR5",
    prices: { month: 88, hour: 0.18 },
    nvme: false,
  },
  {
    name: "16 vCore DDR5",
    cores: 16,
    ram: 32,
    storage: 500,
    ramType: "DDR5",
    prices: { month: 99, hour: 0.2 },
    nvme: false,
    cpu: "Dual EPYC 7702"
  },
]

// DDR4 PLANS
const serverPlansDDR4 = [
  {
    name: "2 vCore DDR4",
    cores: 2,
    ram: 2,
    storage: 35,
    ramType: "DDR4",
    prices: { month: 4, hour: 0.02 },
    nvme: true,
  },
  {
    name: "2 vCore DDR4",
    cores: 2,
    ram: 4,
    storage: 55,
    ramType: "DDR4",
    prices: { month: 6, hour: 0.04 },
    nvme: true,
  },
  {
    name: "3 vCore DDR4",
    cores: 3,
    ram: 4,
    storage: 65,
    ramType: "DDR4",
    prices: { month: 8, hour: 0.05 },
    nvme: true,
  },
  {
    name: "4 vCore DDR4",
    cores: 4,
    ram: 6,
    storage: 85,
    ramType: "DDR4",
    prices: { month: 11, hour: 0.06 },
    nvme: true,
  },
  {
    name: "4 vCore DDR4",
    cores: 4,
    ram: 8,
    storage: 115,
    ramType: "DDR4",
    prices: { month: 15, hour: 0.08 },
    nvme: true,
  },
  {
    name: "5 vCore DDR4",
    cores: 5,
    ram: 10,
    storage: 140,
    ramType: "DDR4",
    prices: { month: 18, hour: 0.09 },
    nvme: true,
  },
  {
    name: "6 vCore DDR4",
    cores: 6,
    ram: 12,
    storage: 160,
    ramType: "DDR4",
    prices: { month: 22, hour: 0.12 },
    nvme: true,
  },
  {
    name: "8 vCore DDR4",
    cores: 8,
    ram: 16,
    storage: 200,
    ramType: "DDR4",
    prices: { month: 26, hour: 0.14 },
    nvme: true,
  },
  {
    name: "10 vCore DDR4",
    cores: 10,
    ram: 20,
    storage: 250,
    ramType: "DDR4",
    prices: { month: 32, hour: 0.18 },
    nvme: true,
  },
  {
    name: "12 vCore DDR4",
    cores: 12,
    ram: 24,
    storage: 300,
    ramType: "DDR4",
    prices: { month: 36, hour: 0.22 },
    nvme: true,
  },
  {
    name: "14 vCore DDR4",
    cores: 14,
    ram: 28,
    storage: 300,
    ramType: "DDR4",
    prices: { month: 40, hour: 0.26 },
    nvme: true,
  },
  {
    name: "16 vCore DDR4",
    cores: 16,
    ram: 32,
    storage: 300,
    ramType: "DDR4",
    prices: { month: 47, hour: 0.31 },
    nvme: true,
  },
  {
    name: "20 vCore DDR4",
    cores: 20,
    ram: 40,
    storage: 300,
    ramType: "DDR4",
    prices: { month: 55, hour: 0.37 },
    nvme: true,
  },
  {
    name: "24 vCore DDR4",
    cores: 24,
    ram: 48,
    storage: 350,
    ramType: "DDR4",
    prices: { month: 62, hour: 0.45 },
    nvme: true,
  },
  {
    name: "28 vCore DDR4",
    cores: 28,
    ram: 56,
    storage: 400,
    ramType: "DDR4",
    prices: { month: 71, hour: 0.53 },
    nvme: true,
  },
  {
    name: "32 vCore DDR4",
    cores: 32,
    ram: 64,
    storage: 450,
    ramType: "DDR4",
    prices: { month: 85, hour: 0.61 },
    nvme: true,
  },
  {
    name: "36 vCore DDR4",
    cores: 36,
    ram: 72,
    storage: 500,
    ramType: "DDR4",
    prices: { month: 100, hour: 0.73 },
    nvme: true,
  },
  {
    name: "48 vCore DDR4",
    cores: 48,
    ram: 96,
    storage: 600,
    ramType: "DDR4",
    prices: { month: 138, hour: 1.03 },
    nvme: true,
  },
  {
    name: "56 vCore DDR4",
    cores: 56,
    ram: 112,
    storage: 650,
    ramType: "DDR4",
    prices: { month: 156, hour: 1.24 },
    nvme: true,
  },
  {
    name: "64 vCore DDR4",
    cores: 64,
    ram: 128,
    storage: 700,
    ramType: "DDR4",
    prices: { month: 175, hour: 1.52 },
    nvme: true,
  },
  {
    name: "72 vCore DDR4",
    cores: 72,
    ram: 128,
    storage: 700,
    ramType: "DDR4",
    prices: { month: 201, hour: 1.86 },
    nvme: true,
  },
  {
    name: "80 vCore DDR4",
    cores: 80,
    ram: 132,
    storage: 750,
    ramType: "DDR4",
    prices: { month: 265, hour: 2.25 },
    nvme: true,
  },
  {
    name: "88 vCore DDR4",
    cores: 88,
    ram: 156,
    storage: 800,
    ramType: "DDR4",
    prices: { month: 289, hour: 2.77 },
    nvme: true,
  },
  {
    name: "96 vCore DDR4",
    cores: 96,
    ram: 192,
    storage: 900,
    ramType: "DDR4",
    prices: { month: 326, hour: 3.36 },
    nvme: true,
  },
  {
    name: "112 vCore DDR4",
    cores: 112,
    ram: 224,
    storage: 1024,
    ramType: "DDR4",
    prices: { month: 395, hour: 5.72 },
    nvme: true,
  },
  {
    name: "128 vCore DDR4",
    cores: 128,
    ram: 256,
    storage: 1024,
    ramType: "DDR4",
    prices: { month: 445, hour: 8.20 },
    nvme: true,
  },
]

// Combine plans for display (DDR5 first, then DDR4)
const serverPlans = [
  ...serverPlansDDR5,
  ...serverPlansDDR4,
]

export function ServerConfigurator() {
  const [serverName, setServerName] = useState("")
  // billingPeriod Только месяц
  const [billingPeriod] = useState<BillingPeriod>("month")
  const [showMore, setShowMore] = useState(false)
  const [plans, setPlans] = useState(serverPlansDDR5.concat(serverPlansDDR4))
  const { user } = useAuth()
  const { createServer } = useData()
  const { convertPrice } = useCurrency()
  const { t } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    fetch('/api/server-plans')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const dynamicPlans = data.map((plan: any) => ({
            name: plan.nameRu || plan.name,
            cores: plan.cpu,
            ram: plan.ram,
            storage: plan.storage,
            ramType: plan.ramType || 'DDR4',
            prices: { month: plan.price },
            nvme: plan.nvme || false,
            cpu: plan.cpu,
          }))
          setPlans(dynamicPlans)
        }
      })
      .catch(err => console.error('Failed to load server plans:', err))
  }, [])

  // Show 8 DDR5 plans, expand to all DDR5+DDR4 on show more
  const visiblePlans = showMore ? plans : plans.slice(0, 8)

  const handleCreateServer = (plan: (typeof serverPlans)[0]) => {
    if (!user) {
      router.push("/login")
      return
    }
    if (!serverName.trim()) {
      alert(t("configurator.enterName"))
      return
    }
    const priceUSD = plan.prices[billingPeriod]
    const price = convertPrice(priceUSD)
    // @ts-ignore balance type -- update if balance is elsewhere
    if ((user as any).balance < price) {
      alert(t("configurator.insufficientFunds"))
      router.push("/dashboard/billing")
      return
    }

    const expiresAt = new Date()
    // only "month"
    expiresAt.setMonth(expiresAt.getMonth() + 1)

    createServer({
      name: serverName,
      plan: plan.name,
      vCores: plan.cores,
      ram: plan.ram,
      storage: plan.storage,
      status: "active",
      ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      expiresAt: expiresAt.toISOString(),
      billingPeriod,
      price,
      ramType: plan.ramType,
      nvme: plan.nvme,
      cpu: plan.cpu,
    })

    router.push("/dashboard")
  }

  return (
    <section className="space-y-6" id="server-configurator">
      <div className="card-gradient rounded-xl p-6 lg:p-8 border border-border/50">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{t("configurator.title")}</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="server-name" className="text-foreground">
              {t("configurator.serverName")}
            </Label>
            <Input
              id="server-name"
              placeholder={t("configurator.serverNamePlaceholder")}
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          {/* Убрали выбор периода, остался только месяц */}
          {/* <div className="space-y-3">
            <Label className="text-foreground">{t("configurator.billingType")}</Label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {billingPeriods.map((period) => (
                <button
                  key={period}
                  onClick={() => setBillingPeriod(period)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    billingPeriod === period
                      ? "bg-primary text-primary-foreground shadow-lg glow-effect"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {t(`configurator.${period}`)}
                </button>
              ))}
            </div>
          </div> */}

          <div className="space-y-3">
            <Label className="text-foreground">{t("configurator.selectPlan")}</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {visiblePlans.map((plan, index) => (
                <ServerPlanCard
                  key={index}
                  plan={plan}
                  billingPeriod={billingPeriod}
                  onSelect={() => handleCreateServer(plan)}
                />
              ))}
            </div>

            {serverPlans.length > 8 && (
              <div className="flex justify-center pt-4">
                <Button variant="outline" onClick={() => setShowMore(!showMore)} className="w-full max-w-xs">
                  {showMore ? t("configurator.showLess") : t("configurator.showMore")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
