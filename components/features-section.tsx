"use client"

import { Zap, Shield, Clock, Headphones } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: Zap,
    titleKey: "features.instantDeploy.title",
    descKey: "features.instantDeploy.desc",
  },
  {
    icon: Shield,
    titleKey: "features.ddosProtection.title",
    descKey: "features.ddosProtection.desc",
  },
  {
    icon: Clock,
    titleKey: "features.hourlyBilling.title",
    descKey: "features.hourlyBilling.desc",
  },
  {
    icon: Headphones,
    titleKey: "features.support247.title",
    descKey: "features.support247.desc",
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className="group card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-effect hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {t(feature.titleKey)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
          </div>
        )
      })}
    </section>
  )
}
