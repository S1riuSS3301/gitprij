"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

type Promo = { id: string; code: string; discount: number; type: "percentage" | "fixed"; maxUses: number; currentUses: number; expiresAt: string; active: boolean }

export function PromoCodesManager() {
  const [code, setCode] = useState("")
  const [discount, setDiscount] = useState("")
  const [type, setType] = useState<"percentage" | "fixed">("percentage")
  const [maxUses, setMaxUses] = useState("")
  const [expires, setExpires] = useState("")
  const [active, setActive] = useState(true)
  const [rows, setRows] = useState<Promo[]>([])

  const load = async () => {
    const res = await fetch("/api/promo-codes")
    if (!res.ok) return
    const data = await res.json()
    setRows(data)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-xl p-6 border border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-6">Создать промокод</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="code" className="text-foreground">
              Код промокода
            </Label>
            <Input
              id="code"
              placeholder="PROMO2025"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discount" className="text-foreground">
              Скидка (% или $)
            </Label>
            <Input
              id="discount"
              placeholder="10% или $50"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Тип скидки</Label>
            <div className="flex gap-3">
              <Button type="button" variant={type === "percentage" ? "default" : "outline"} size="sm" onClick={() => setType("percentage")}>%</Button>
              <Button type="button" variant={type === "fixed" ? "default" : "outline"} size="sm" onClick={() => setType("fixed")}>$</Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="max-uses" className="text-foreground">
              Максимум использований
            </Label>
            <Input
              id="max-uses"
              type="number"
              placeholder="100"
              value={maxUses}
              onChange={(e) => setMaxUses(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expires" className="text-foreground">
              Дата истечения
            </Label>
            <Input
              id="expires"
              type="date"
              value={expires}
              onChange={(e) => setExpires(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <input id="active" type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
            <Label htmlFor="active" className="text-foreground">Активен</Label>
          </div>
          <Button
            className="ml-auto bg-primary hover:bg-primary/90 gap-2"
            onClick={async () => {
              const payload = {
                code: code.trim(),
                discount: Number((discount || "").replace(/[^0-9.]/g, "")),
                type,
                maxUses: Number(maxUses || 0),
                expiresAt: expires,
                active,
              }
              if (!payload.code || !payload.discount || !payload.maxUses || !payload.expiresAt) return
              const res = await fetch("/api/promo-codes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
              if (res.ok) {
                setCode("")
                setDiscount("")
                setMaxUses("")
                setExpires("")
                setActive(true)
                load()
              }
            }}
          >
            <Plus className="w-4 h-4" />
            Создать промокод
          </Button>
        </div>
      </div>

      <div className="card-gradient rounded-xl p-6 border border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-6">Активные промокоды</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Код</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Скидка</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Использовано</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Истекает</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Статус</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Действия</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((promo) => (
                <tr key={promo.id} className="border-b border-border/30 hover:bg-background/30 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-foreground">{promo.code}</td>
                  <td className="py-4 px-4 text-sm text-foreground">
                    {promo.type === "percentage" ? `${promo.discount}%` : `$${promo.discount}`}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    {promo.currentUses} / {promo.maxUses}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{new Date(promo.expiresAt).toLocaleDateString()}</td>
                  <td className="py-4 px-4">
                    <Badge variant={promo.active ? "default" : "secondary"}>
                      {promo.active ? "Активен" : "Неактивен"}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={async () => {
                        const res = await fetch(`/api/promo-codes/${promo.id}`, { method: "DELETE" })
                        if (res.ok) load()
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
