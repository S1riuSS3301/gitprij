"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Send, Loader2, User, Shield } from "lucide-react"
import { toast } from "sonner"

interface SupportMessage {
  id: string
  content: string
  createdAt: string
  isFromAdmin: boolean
  user?: {
    name?: string
    email?: string
  }
}

interface SupportTicket {
  id: string
  subject: string
  status: string
  category: string
  priority: string
  messages: SupportMessage[]
}

interface SupportChatModalProps {
  ticket: SupportTicket | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onMessageSent?: () => void
}

export function SupportChatModal({
  ticket,
  open,
  onOpenChange,
  onMessageSent
}: SupportChatModalProps) {
  const [messages, setMessages] = useState<SupportMessage[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ticket) {
      setMessages(ticket.messages)
      setLoading(false)
    }
  }, [ticket])

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !ticket || sending) return

    setSending(true)
    try {
      const response = await fetch(`/api/support/${ticket.id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage.trim() })
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      const sentMessage = await response.json()
      setMessages(prev => [...prev, sentMessage])
      setNewMessage("")
      onMessageSent?.()
      toast.success("Сообщение отправлено")
    } catch (error) {
      toast.error("Ошибка при отправке сообщения")
    } finally {
      setSending(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    })
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-blue-500/20 text-blue-400"
      case "in_progress": return "bg-yellow-500/20 text-yellow-400"
      case "resolved": return "bg-green-500/20 text-green-400"
      case "closed": return "bg-gray-500/20 text-gray-400"
      default: return "bg-gray-500/20 text-gray-400"
    }
  }

  if (!ticket) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg">{ticket.subject}</DialogTitle>
            <Badge className={getStatusColor(ticket.status)}>
              {getStatusLabel(ticket.status)}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Тикет #{ticket.id.slice(-8)} • Категория: {
              ticket.category === "general" ? "Общие вопросы" :
              ticket.category === "technical" ? "Техническая поддержка" :
              ticket.category === "billing" ? "Оплата и биллинг" :
              ticket.category === "server_issue" ? "Проблемы с сервером" :
              ticket.category
            }
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 min-h-0 p-4 bg-muted/30 rounded-lg">
          {messages.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Сообщений пока нет</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isFromAdmin ? "justify-start" : "justify-end"}`}
              >
                <Avatar className="w-8 h-8 mt-1">
                  <AvatarFallback className={message.isFromAdmin ? "bg-blue-500" : "bg-green-500"}>
                    {message.isFromAdmin ? <Shield className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </AvatarFallback>
                </Avatar>
                <div className={`max-w-[70%] ${message.isFromAdmin ? "order-first" : "order-last"}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.isFromAdmin
                        ? "bg-background border"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {message.isFromAdmin ? "Поддержка" : "Вы"} • {formatDate(message.createdAt)}
                  </p>
                </div>
              </div>
            ))
          )}
          <div ref={chatEndRef} />
        </div>

        {ticket.status !== "closed" && (
          <div className="flex gap-2 pt-4 border-t">
            <Input
              placeholder="Введите сообщение..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={sending}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || sending}
              size="icon"
            >
              {sending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
        )}

        {ticket.status === "closed" && (
          <div className="text-center py-4 text-muted-foreground border-t">
            <p>Этот тикет закрыт. Если вам нужна дополнительная помощь, создайте новый тикет.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
