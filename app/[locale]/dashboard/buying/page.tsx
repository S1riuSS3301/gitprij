"use client";

import React, { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCurrency } from "@/contexts/currency-context";
import { useLanguage } from "@/contexts/language-context";
import { Server, Sparkles, X, Zap } from "lucide-react";
import { Header } from "@/components/header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// 💾 Общие тарифы DDR4 + DDR5
const TARIFFS = [
  // DDR5
  { id: "ddr5-2c-2g", name: "2 Cores | 2 GB DDR5 | 35 GB NVMe", cores: 2, ram: 2, storage: 35, ramType: "DDR5", storageType: "NVMe", prices: { month: 6, year: 60 } },
  { id: "ddr5-4c-8g", name: "4 Cores | 8 GB DDR5 | 115 GB NVMe", cores: 4, ram: 8, storage: 115, ramType: "DDR5", storageType: "NVMe", prices: { month: 23, year: 230 } },
  { id: "ddr5-8c-16g", name: "8 Cores | 16 GB DDR5 | 200 GB NVMe", cores: 8, ram: 16, storage: 200, ramType: "DDR5", storageType: "NVMe", prices: { month: 39, year: 390 } },

  // DDR4
  { id: "ddr4-2c-2g", name: "2 Cores | 2 GB DDR4 | 35 GB NVMe", cores: 2, ram: 2, storage: 35, ramType: "DDR4", storageType: "NVMe", prices: { month: 4, year: 40 } },
  { id: "ddr4-4c-8g", name: "4 Cores | 8 GB DDR4 | 115 GB NVMe", cores: 4, ram: 8, storage: 115, ramType: "DDR4", storageType: "NVMe", prices: { month: 15, year: 150 } },
  { id: "ddr4-16c-32g", name: "16 Cores | 32 GB DDR4 | 300 GB NVMe", cores: 16, ram: 32, storage: 300, ramType: "DDR4", storageType: "NVMe", prices: { month: 47, year: 470 } },
];

const DDR5_TARIFFS = TARIFFS.filter(t => t.ramType === "DDR5");
const DDR4_TARIFFS = TARIFFS.filter(t => t.ramType === "DDR4");

// 💡 Компонент карточки тарифа
function TariffCard({
  tariff,
  isSelected,
  onSelect,
  formatPrice,
  billingPeriod,
  index,
  t,
}: {
  tariff: typeof TARIFFS[number];
  isSelected: boolean;
  onSelect: (id: string) => void;
  formatPrice: (p: number) => string;
  billingPeriod: "month" | "year";
  index: number;
  t: (k: string) => string;
}) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <motion.button
          type="button"
          aria-pressed={isSelected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, delay: index * 0.03 }}
          onClick={() => onSelect(tariff.id)}
          className={`group w-full border rounded-2xl p-4 flex flex-col gap-3 text-left shadow-sm transition-all ${
            isSelected
              ? "border-primary bg-primary/5 scale-[1.02]"
              : "border-border/40 bg-card/70 hover:bg-card/90"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-base text-foreground">
                {tariff.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {tariff.cores} CPU · {tariff.ram} GB {tariff.ramType} ·{" "}
                {tariff.storage} GB NVMe
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="text-xs text-muted-foreground">
              {t("servers.includedDdosBackups") || "Includes DDoS & backups"}
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                {formatPrice(tariff.prices[billingPeriod])}
              </div>
              <div className="text-xs text-muted-foreground">
                /{billingPeriod === "month" ? "mo" : "yr"}
              </div>
            </div>
          </div>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side="top">
        {t("servers.tariffTooltip") || "Click to select this plan"}
      </TooltipContent>
    </Tooltip>
  );
}

// 💰 Компонент блока цены
function PriceBlock({
  priceDetails,
  formatPrice,
}: {
  priceDetails: any;
  formatPrice: (price: number) => string;
}) {
  if (!priceDetails) return null;
  return (
    <div className="mt-3 bg-background/60 p-3 rounded-lg border text-sm">
      <div className="flex justify-between">
        <span>Base</span>
        <span>{formatPrice(priceDetails.base)}</span>
      </div>
      {!!priceDetails.discount && (
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-{formatPrice(priceDetails.discount)}</span>
        </div>
      )}
      <div className="flex justify-between">
        <span>VAT (19%)</span>
        <span>{formatPrice(priceDetails.tax)}</span>
      </div>
      <div className="flex justify-between font-semibold border-t mt-2 pt-2">
        <span>Total</span>
        <span>{formatPrice(priceDetails.total)}</span>
      </div>
    </div>
  );
}

export default function BuyingPage() {
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [serverName, setServerName] = useState("");
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useLanguage();
  const { formatPrice, convertPrice } = useCurrency();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ddr5");

  const selected = useMemo(
    () => TARIFFS.find((t) => t.id === selectedTariff) || null,
    [selectedTariff]
  );

  const filterTariffs = (list: typeof TARIFFS) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (t) => t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q)
    );
  };

  const priceDetails = useMemo(() => {
    if (!selected) return null;
    const base = selected.prices[billingPeriod];
    const discount = billingPeriod === "year" ? +(base * 0.1).toFixed(2) : 0;
    const taxed = base - discount;
    const tax = +(taxed * 0.19).toFixed(2);
    const total = +(taxed + tax).toFixed(2);
    return { base, discount, tax, total };
  }, [selected, billingPeriod]);

  const handleBuy = async () => {
    if (!selectedTariff || !serverName) return;
    setLoading(true);
    setSuccess(false);
    const tariff = TARIFFS.find((t) => t.id === selectedTariff);
    if (!tariff) return;
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serverName,
          serverPlan: tariff.name,
          billingPeriod,
          price: convertPrice(tariff.prices[billingPeriod]),
        }),
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
      <Header />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            {t("servers.buyTitle") || "Buy Server"}
            <span className="ml-2 text-sm text-muted-foreground">
              — {t("servers.pickThePerfect") || "fast, reliable VPS plans"}
            </span>
          </h1>
        </motion.div>

        {/* Основной контент */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Тарифы */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-4 gap-3">
              <Input
                placeholder="Search tariffs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-background/50 border-primary/10"
              />
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTariff(null);
                }}
                className="ml-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start rounded-md bg-muted p-1 text-muted-foreground md:w-auto">
                <TabsTrigger value="ddr5">DDR5</TabsTrigger>
                <TabsTrigger value="ddr4">DDR4</TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[calc(100vh-260px)] md:h-[calc(100vh-220px)] pr-2 mt-4">
                {[{ tab: "ddr5", data: DDR5_TARIFFS }, { tab: "ddr4", data: DDR4_TARIFFS }].map(
                  ({ tab, data }) => (
                    <TabsContent key={tab} value={tab}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AnimatePresence>
                          {filterTariffs(data).map((tariff, idx) => (
                            <TariffCard
                              key={tariff.id}
                              tariff={tariff}
                              isSelected={selectedTariff === tariff.id}
                              onSelect={setSelectedTariff}
                              formatPrice={formatPrice}
                              billingPeriod={billingPeriod}
                              index={idx}
                              t={t}
                            />
                          ))}
                        </AnimatePresence>
                      </div>
                    </TabsContent>
                  )
                )}
              </ScrollArea>
            </Tabs>
          </div>

          {/* Панель заказа */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-20 space-y-4">
              <motion.div
                className="bg-card/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-primary/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <label className="block mb-1 text-sm font-medium text-foreground">
                      Server Name
                    </label>
                    <Input
                      placeholder="e.g., my-vds"
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      className="bg-background/50 border-primary/10"
                    />
                  </div>
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Instant
                  </Badge>
                </div>

                {/* Billing */}
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Billing Period</p>
                  <div className="flex gap-2">
                    <Button
                      variant={billingPeriod === "month" ? "default" : "outline"}
                      onClick={() => setBillingPeriod("month")}
                      className="flex-1"
                    >
                      Monthly
                    </Button>
                    <Button
                      variant={billingPeriod === "year" ? "default" : "outline"}
                      onClick={() => setBillingPeriod("year")}
                      className="flex-1"
                    >
                      Yearly
                    </Button>
                  </div>
                </div>

                {/* Выбранный тариф */}
                {selected ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 border-t pt-4"
                  >
                    <p className="text-sm font-medium">Selected Plan</p>
                    <div className="flex justify-between mt-3">
                      <span className="text-sm text-muted-foreground">
                        {selected.name}
                      </span>
                      <span className="font-semibold text-primary">
                        {formatPrice(selected.prices[billingPeriod])}
                      </span>
                    </div>
                    <PriceBlock priceDetails={priceDetails} formatPrice={formatPrice} />
                    <div className="mt-4 flex gap-3">
                      <Button
                        onClick={handleBuy}
                        disabled={!selectedTariff || !serverName || loading}
                        className="flex-1"
                      >
                        {loading ? "Processing..." : "Purchase"}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setSelectedTariff(null)}
                        className="w-12"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="mt-3 bg-green-50 text-green-700 rounded-md p-2 text-center text-sm"
                      >
                        🎉 Server successfully ordered!
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Select a plan to view details and checkout.
                  </p>
                )}
              </motion.div>

              {/* Доп. преимущества */}
              <div className="bg-card/80 p-4 rounded-2xl shadow border text-sm">
                <div className="flex items-center gap-2 font-medium mb-2">
                  <Sparkles className="w-4 h-4" />
                  Why choose us?
                </div>
                <ul className="text-muted-foreground space-y-1">
                  <li>99.99% uptime SLA</li>
                  <li>Automatic backups & snapshots</li>
                  <li>24/7 support (ticket & chat)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
