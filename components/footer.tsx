"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mt-20 pt-8 pb-8 border-t border-border/40 bg-background/60 backdrop-blur animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} vds.hub</span>
          <span className="hidden md:inline-block">·</span>
          <Link href="/privacy" className="hover:text-primary underline underline-offset-4 transition-colors duration-200">
            {t ? t("footer.privacyPolicy") : "Политика конфиденциальности"}
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="mailto:support@vds.sh"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
            title="support@vds.sh"
          >
            support@vds.sh
          </a>
          <a
            href="https://t.me/vdssh"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  )
}

