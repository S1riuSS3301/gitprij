"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smartphone } from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useData } from "@/contexts/data-context"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

type PaymentMethod = "crystalpay"

function PaymentMethods() {
  const [amount, setAmount] = useState("")
  const { user, refresh } = useAuth()
  const { addTransaction, refreshData } = useData()
  const { toast } = useToast()
  const [cpEnabled, setCpEnabled] = useState<boolean>(false)
  const [balance, setBalance] = useState<number>(0)
  const { language } = useLanguage()

  const paymentOptions = [
    {
      id: "crystalpay" as PaymentMethod,
      name: language === "ru" ? "CrystalPay" : "CrystalPay",
      icon: Smartphone,
      description: language === "ru" ? "" : ".",
      fee: language === "ru" ? "до 5%" : "up to 5%",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!cpEnabled) {
        fetch("/api/config/payments", { cache: "no-store" })
          .then((r) => r.json())
          .then((cfg) => setCpEnabled(Boolean(cfg?.crystalpayEnabled)))
          .catch(() => setCpEnabled(false))
      }

      if (user && balance === 0) {
        fetch("/api/profile", { cache: "no-store" })
          .then((r) => (r.ok ? r.json() : null))
          .then((p) => setBalance(typeof p?.balance === "number" ? p.balance : 0))
          .catch(() => setBalance(0))
      }

      // Проверяем возврат с платежной системы
      const params = new URLSearchParams(window.location.search)
      const id = params.get('id')
      const state = params.get('state')

      // Если есть id инвойса и состояние оплачено - проверяем платеж
      if (id && (state === 'payed' || state === 'paid')) {
        confirmCrystalPayment(id)
      } else if (id) {
        // Если есть id но статус не оплачен - тоже проверяем (на случай если статус не передался)
        confirmCrystalPayment(id)
      }
    }
  }, [user, cpEnabled, balance])

  const confirmCrystalPayment = async (id: string) => {
    try {
      toast({
        title: language === "ru" ? "Проверка платежа..." : "Verifying payment...",
      })

      const response = await fetch('/api/crystalpay/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Confirmation failed')
      }

      if (data.paid) {
        toast({
          title: language === "ru" ? "Платеж успешен!" : "Payment successful!",
          description: language === "ru" 
            ? `Баланс пополнен на $${data.amount || '0'}` 
            : `Balance topped up with $${data.amount || '0'}`,
        })

        // Обновляем баланс и данные
        await refresh()
        refreshData()
        
        // Обновляем локальный баланс
        const profileRes = await fetch("/api/profile", { cache: "no-store" })
        if (profileRes.ok) {
          const profile = await profileRes.json()
          setBalance(profile.balance || 0)
        }

        // Очищаем параметры из URL
        const url = new URL(window.location.href)
        url.searchParams.delete("id")
        url.searchParams.delete("state")
        url.searchParams.delete("tx")
        window.history.replaceState({}, "", url.toString())
      } else {
        toast({
          title: language === "ru" ? "Ожидание оплаты" : "Waiting for payment",
          description: language === "ru" 
            ? "Платеж еще не обработан" 
            : "Payment not yet processed",
        })
      }
    } catch (err) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: (err as Error).message,
        variant: "destructive",
      })
    }
  }

  const handlePayment = async (method: "crystalpay" | "lzt") => {
    if (!user || !amount || Number.parseFloat(amount) < 10) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: language === "ru" ? "Минимальная сумма: $10 USD" : "Minimum amount: $10 USD",
        variant: "destructive",
      });
      return;
    }

    let roundedAmount = Number.parseFloat(amount);
    if (isNaN(roundedAmount) || roundedAmount <= 0) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: language === "ru" ? "Некорректная сумма (только USD!)" : "Invalid amount (USD only)",
        variant: "destructive",
      });
      return;
    }
    roundedAmount = Number(roundedAmount.toFixed(2));

    let sendAmount = roundedAmount
    if (method === 'lzt') {
      sendAmount = Number((roundedAmount * 1.05).toFixed(2)) // исправлено: округление с учетом комиссии
    }

    try {
      toast({
        title: `${method === "crystalpay" ? "CrystalPay" : "LZT"}: ${language === "ru" ? "обработка платежа..." : "processing..."}`,
        description: language === "ru" ? "Пожалуйста, подождите" : "Please wait",
      });

      const endpoint = method === "crystalpay" ? "/api/crystalpay" : "/api/lzt/create"
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: sendAmount,
          description: language === "ru" ? `Пополнение через ${method === "crystalpay" ? "CrystalPay" : "LZT"} ` : `Top-up via ${method === "crystalpay" ? "CrystalPay" : "LZT"} (USD)`,
          currency: "USD",
          userId: user.id,
          lifetime: 1440,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unknown error");
      }

      // исправлено: добавлен type (topup), currency, и method для addTransaction
      addTransaction({
        userId: user.id,
        amount: roundedAmount,
        currency: "USD",
        status: "pending",
        method: method,
        description:
          method === "crystalpay"
            ? language === "ru"
              ? `Пополнение через CrystalPay`
              : `Top-up via CrystalPay`
            : language === "ru"
            ? `Пополнение через LZT`
            : `Top-up via LZT`,
        type: "topup",
      });

      toast({
        title: language === "ru" ? "Инвойс создан!" : "Invoice created!",
        description: language === "ru"
          ? `Перенаправляем на оплату ${method === "crystalpay" ? "CrystalPay" : "LZT"}...`
          : `Redirecting to ${method === "crystalpay" ? "CrystalPay" : "LZT"}...`,
      });

      window.location.href = data.url;
    } catch (err) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: (err as Error).message,
        variant: "destructive",
      });
    }
  };

  const amt = Number.parseFloat(amount || "0")
  const totalCrystal = amt >= 10 ? `$${amt.toFixed(2)}` : "0.00"
  const lztWithFee = amt >= 10 ? amt * 1.05 : 0
  const totalLzt = amt >= 10
    ? `$${lztWithFee.toFixed(2)}`
    : "0.00"

  return (
    <div className="card-gradient rounded-xl p-6 lg:p-8 border border-border/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          {language === "ru" ? "Пополнить баланс " : "Top-up balance in US Dollars"}
        </h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {paymentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                disabled={!cpEnabled}
                className="p-4 rounded-lg border-2 border-primary bg-primary/10 glow-effect text-left opacity-90"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-1">{option.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">{option.description}</p>
                    <p className="text-xs text-primary">Комиссия: {option.fee}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount" className="text-foreground">
            Сумма пополнения
          </Label>
          <Input
            id="amount"
            type="number"
            min="10"
            step="0.01"
            placeholder="50.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-background/50 border-border/50 focus:border-primary"
            inputMode="decimal"
          />
          <p className="text-xs text-muted-foreground">
            Минимальная сумма: $10.00 USD
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-border/50">
          <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="text-lg font-semibold text-foreground">
                CrystalPay: {totalCrystal}
              </p>
              <p className="text-lg font-semibold text-foreground">
                LZT (5%): {totalLzt}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!cpEnabled || !amount || Number.parseFloat(amount) < 10}
            onClick={() => handlePayment("crystalpay")}
          >
            {language === "ru" ? "Оплата CrystalPay" : "Pay via CrystalPay "}
          </Button>
          <Button
            className="w-full bg-primary/80 hover:bg-primary"
            disabled={!amount || Number.parseFloat(amount) < 10}
            onClick={() => handlePayment("lzt")}
          >
            {language === "ru" ? "Оплата LZT " : "Pay via LZT "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;