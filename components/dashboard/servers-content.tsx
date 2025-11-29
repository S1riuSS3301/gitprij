"use client"

import { useState } from "react"
import { ServersList } from "./servers-list"
import { CreateServerModal } from "./create-server-modal"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Снимаем любое ограничение на открытие модального окна создания сервера (можно открывать всегда)

export function ServersContent() {
  const { t } = useLanguage()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("servers.title")}</h1>
          <p className="text-muted-foreground">{t("servers.subtitle")}</p>
        </div>
        {/* Кнопка "Создать сервер" всегда активна, ограничение убрано */}
        <Button
          onClick={() => window.location.assign("/dashboard/buying")}
          className="bg-primary hover:bg-primary/90 gap-2"
        >
          <Plus className="w-5 h-5" />
          {t("servers.createServer")}
        </Button>
      </div>

      <ServersList />

      {/* Модальное окно создания сервера открывается и закрывается всегда, ограничение снято */}
      <CreateServerModal open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen} />
    </div>
  )
}
