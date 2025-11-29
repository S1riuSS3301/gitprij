"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Paperclip } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type ChatMessage = {
  id: string
  sender: "user" | "support"
  text: string
  time: string
}

function getCurrentTime() {
  const now = new Date()
  return now
    .toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })
}

export function SupportChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "support-init",
      sender: "support",
      text: "Здравствуйте! Чем могу помочь?",
      time: getCurrentTime(),
    }
  ])
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  // Автопрокрутка вниз
  useEffect(() => {
    const timer = setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
    return () => clearTimeout(timer)
  }, [messages])

  // Отправка сообщения в собственный backend вместо Telegram Bot API напрямую
  const sendMessage = async () => {
    if (!message.trim()) return

    setSending(true)
    setError(null)
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: message.trim(),
      time: getCurrentTime(),
    }
    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    try {
      // Отправка сообщения на свой backend (например, /api/support-chat)
      const resp = await fetch("/api/support-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      })
      if (!resp.ok) {
        // Ошибка сервера поддержки
        const respData = await resp.json().catch(() => ({}))
        throw new Error(respData?.error || "Ошибка отправки сообщения на сервер поддержки")
      }

      // Здесь можно реализовать логику отображения ответа поддержки, если backend возвращает ответ support-оператора
      // Сейчас для user feedback покажем "Ожидайте ответа оператора"
      setMessages((prev) => [
        ...prev,
        {
          id: `support-waiting-${Date.now()}`,
          sender: "support",
          text: "Спасибо за обращение! Пожалуйста, ожидайте ответа оператора.",
          time: getCurrentTime(),
        },
      ])
    } catch (err: any) {
      setError("Не удалось отправить сообщение. Попробуйте ещё раз.")
    } finally {
      setSending(false)
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim() && !sending) {
      sendMessage()
    }
  }

  return (
    <div className="card-gradient rounded-xl border border-border/50 flex flex-col h-[600px]">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-primary text-primary-foreground">
              AI
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">Поддержка VDS_HUB</h3>
            <p className="text-xs text-green-400">Онлайн</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/50 border border-border/50 text-foreground"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === "user"
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="bg-transparent" tabIndex={-1} type="button" disabled>
            <Paperclip className="w-4 h-4" />
          </Button>
          <Input
            placeholder="Введите сообщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-background/50 border-border/50"
            onKeyDown={handleInputKeyDown}
            disabled={sending}
          />
          <Button
            className="bg-primary hover:bg-primary/90"
            disabled={!message.trim() || sending}
            onClick={sendMessage}
            type="button"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        {error && (
          <div className="text-xs text-red-500 mt-2">{error}</div>
        )}
        <p className="text-xs text-muted-foreground mt-2">
          Также доступна поддержка в{" "}
          <a
            href="https://t.me/vdshub_support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Telegram
          </a>
        </p>
      </div>
    </div>
  )
}
