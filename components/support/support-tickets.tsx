"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"
import { SupportChatModal } from "./support-chat-modal"

interface SupportTicket {
  id: string
  subject: string
  status: string
  category: string
  priority: string
  createdAt: string
  updatedAt: string
  messages: any[]
}

export function SupportTickets() {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null)
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    loadTickets()
  }, [])

  const loadTickets = async () => {
    try {
      const response = await fetch("/api/support")
      if (response.ok) {
        const data = await response.json()
        setTickets(data)
      }
    } catch (error) {
      console.error("Failed to load tickets:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleTicketClick = (ticket: SupportTicket) => {
    setSelectedTicket(ticket)
    setChatOpen(true)
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "open": return "Открыт"
      case "in_progress": return "В работе"
      case "resolved": return "Решен"
      case "closed": return "Закрыт"
      default: return status
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "open": return "default"
      case "in_progress": return "secondary"
      case "resolved": return "outline"
      case "closed": return "outline"
      default: return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "text-red-400"
      case "high": return "text-orange-400"
      case "normal": return "text-blue-400"
      case "low": return "text-gray-400"
      default: return "text-gray-400"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffHours / 24)

    if (diffHours < 1) return "Менее часа назад"
    if (diffHours < 24) return `${diffHours} ч. назад`
    return `${diffDays} д. назад`
  }

  if (loading) {
    return (
      <div className="card-gradient rounded-xl p-6 border border-border/50">
        <h3 className="text-lg font-bold text-foreground mb-6">Мои тикеты</h3>
        <div className="text-center py-8 text-muted-foreground">
          Загрузка...
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="card-gradient rounded-xl p-6 border border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Мои тикеты</h3>
          <Button
            size="sm"
            variant="outline"
            onClick={loadTickets}
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Обновить
          </Button>
        </div>

        {tickets.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-4">У вас пока нет обращений в поддержку</p>
            <p className="text-sm text-muted-foreground">Создайте новое обращение, если вам нужна помощь</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleTicketClick(ticket)}
                className="p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">#{ticket.id.slice(-8)}</p>
                    <Badge
                      variant={getStatusVariant(ticket.status)}
                      className="text-xs"
                    >
                      {getStatusLabel(ticket.status)}
                    </Badge>
                  </div>
                  <span className={`text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority === "urgent" ? "Срочно" :
                     ticket.priority === "high" ? "Высокий" :
                     ticket.priority === "normal" ? "Нормальный" : "Низкий"}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground mb-2">{ticket.subject}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(ticket.updatedAt)}</span>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{ticket.messages.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SupportChatModal
        ticket={selectedTicket}
        open={chatOpen}
        onOpenChange={setChatOpen}
        onMessageSent={loadTickets}
      />
    </>
  )
}
