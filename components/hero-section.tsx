"use client"

import { ArrowRight, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTranslations } from 'next-intl'
import React from "react"

export function HeroSection() {
  const router = useRouter()
  const t = useTranslations('home')

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Language toggle (floating) */}
       
      {/* Fancier animated backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Main glowing blob, animated morph */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-accent/30 to-transparent blur-3xl opacity-70 animate-blobMorph" />
        <div className="absolute right-[-200px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-accent/10 blur-2xl opacity-50 animate-blobFloat" />
        <div className="absolute left-[-160px] top-[60%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-2xl opacity-40 animate-blobFloat2" />
      </div>

      <style>{`
        @keyframes blobMorph {
          0%,100% { border-radius: 50% 44% 52% 49% / 50% 53% 47% 50%; }
          33%     { border-radius: 40% 60% 60% 45% / 60% 40% 55% 45%; }
          66%     { border-radius: 46% 50% 40% 60% / 55% 45% 60% 50%; }
        }
        @keyframes blobFloat {
          0%, 100% { transform: translateY(0px) scale(1);}
          50%      { transform: translateY(-40px) scale(1.05);}
        }
        @keyframes blobFloat2 {
          0%,100% { transform: translateY(0px) scale(1);}
          50%     { transform: translateY(35px) scale(0.99);}
        }
        .animate-blobMorph { animation: blobMorph 12s ease-in-out infinite; }
        .animate-blobFloat { animation: blobFloat 8s ease-in-out infinite 1s; }
        .animate-blobFloat2 { animation: blobFloat2 10s ease-in-out infinite 3s;}
        .hero-glow {
          filter: drop-shadow(0 0 24px rgba(140,108,250,0.45));
        }
        .pulse-glow {
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(140,108,250,0.17),0 0 24px 6px rgba(140,108,250,0.23);}
          100% { box-shadow: 0 0 0 14px rgba(140,108,250,0.05),0 0 48px 10px rgba(140,108,250,0.23);}
        }
        .anim-fadeSlideUp { animation: fadeSlideUp 1s cubic-bezier(.22,1,.36,1) both;}
        .anim-delay-100 { animation-delay: 0.15s;}
        .anim-delay-200 { animation-delay: 0.3s;}
        .anim-delay-300 { animation-delay: 0.45s;}
        @keyframes fadeSlideUp {
          from { opacity:0; transform: translateY(40px) scale(0.97);}
          to   { opacity:1; transform: translateY(0) scale(1);}
        }
        .btn-glow {
          box-shadow: 0 0 32px 6px #8c6cfaaa;
          transition: box-shadow .3s, filter .3s;
          filter: brightness(1.08) drop-shadow(0 0 12px #8c6cfa80);
        }
        .btn-glow:hover, .btn-glow:focus {
          box-shadow: 0 0 56px 14px #8c6cfae0;
          filter: brightness(1.13) drop-shadow(0 0 24px #8c6cfa88);
        }
      `}</style>

      <div className="relative z-10 text-center space-y-10 px-4">
        {/* Premium badge, neon highlight and gentle glow */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#232044]/70 backdrop-blur-md
          text-sm font-semibold text-primary pulse-glow uppercase tracking-wide shadow-[0_0_12px_3px_rgba(140,108,250,0.11)]
          anim-fadeSlideUp anim-delay-100 border-0 outline-none"
          style={{
            boxShadow: "0 0 24px 4px #8c6cfa30, 0 0 2px #8c6cfa70"
          }}
        >
          <Server className="w-4 h-4" />
          <span className="tracking-tight">{t("hero.badge")}</span>
        </div>

        {/* Main headline: both lines appear with separate cool up-slide/fade */}
        <h1 className="font-bold text-balance leading-[1.09] tracking-[-0.06em] anim-fadeSlideUp" style={{ fontSize: 'clamp(2.7rem,8vw,5.2rem)' }}>
          <span
            className="text-primary hero-glow font-extrabold block"
            style={{ textShadow: "0 2px 38px #8c6cfa88" }}
          >
            {t("hero.title1")}
          </span>
          <span
            className="block text-white drop-shadow-2xl"
            style={{
              WebkitTextStroke: "0px",
              color: "#fff"
            }}
          >
            {t("hero.title2")}
          </span>
        </h1>

        <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-medium anim-fadeSlideUp anim-delay-100">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 anim-fadeSlideUp anim-delay-200">
          <Button
            size="lg"
            className="text-base font-semibold px-8 h-12 btn-glow transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => {
              const configurator = document.getElementById("server-configurator")
              if (configurator) {
                configurator.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            {t("hero.createServer")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold px-8 h-12 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent shadow-sm hover:shadow-md"
            onClick={() => router.push("/register")}
          >
            {t("hero.register")}
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-10 text-sm font-medium anim-fadeSlideUp anim-delay-300">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
            <span className="text-foreground/90">{t("hero.uptime")}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
            <span className="text-foreground/90">{t("hero.instantDeploy")}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
            <span className="text-foreground/90">{t("hero.ddosProtection")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
