"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function SettingsForm() {
  const [settings, setSettings] = useState({
    cryptoCommission: 5,
    fiatCommission: 0,
    minPaymentAmount: 1000,
    emailNotifications: true,
    maintenanceMode: false,
  })

  const handleSave = () => {
    // TODO: Implement save to API
    console.log("Saving settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Комиссии и платежи</CardTitle>
          <CardDescription>
            Настройки комиссий и минимальных сумм платежей
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="crypto-commission">Комиссия на крипту (%)</Label>
              <Input
                id="crypto-commission"
                type="number"
                value={settings.cryptoCommission}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    cryptoCommission: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fiat-commission">Комиссия на фиат (%)</Label>
              <Input
                id="fiat-commission"
                type="number"
                value={settings.fiatCommission}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    fiatCommission: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="min-payment">Минимальная сумма платежа (₽)</Label>
              <Input
                id="min-payment"
                type="number"
                value={settings.minPaymentAmount}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    minPaymentAmount: Number(e.target.value),
                  }))
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Общие настройки</CardTitle>
          <CardDescription>
            Дополнительные параметры платформы
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Уведомления по email</Label>
              <p className="text-sm text-muted-foreground">
                Отправлять уведомления администраторам
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, emailNotifications: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Режим обслуживания</Label>
              <p className="text-sm text-muted-foreground">
                Временно отключить доступ к сайту
              </p>
            </div>
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, maintenanceMode: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Сохранить настройки</Button>
      </div>
    </div>
  )
}
