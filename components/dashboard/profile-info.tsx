"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Send, Hash, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

// Мок статистики — заменишь на реальный API
async function fetchProfileStats() {
  return {
    totalTopups: 250,
    activeServers: 3,
    referralIncome: 12.5,
    telegram: "@johndoe",
    createdAt: "2025-01-15T10:30:00Z",
    email: "new_email@example.com",
  };
}

// API сохранения аватарки
async function updateAvatarApi(file: File, userId: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", userId);

  const res = await fetch("/api/profile/avatar", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data as { success: boolean; url?: string };
}

// Мок обновления email
async function updateEmailApi(newEmail: string) {
  if (!newEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(newEmail)) return { success: false };
  return { success: true, email: newEmail };
}

export function ProfileInfo() {
  const { user, refresh } = useAuth();
  const profile = user?.profile;
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [stats, setStats] = useState({
    totalTopups: 0,
    activeServers: 0,
    referralIncome: 0,
    telegram: "",
    createdAt: "",
    email: "",
  });

  const [avatarUrl, setAvatarUrl] = useState<string | null>(profile?.avatarUrl ?? null);
  const [avatarLoading, setAvatarLoading] = useState(false);

  const [editEmail, setEditEmail] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);

  useEffect(() => {
    fetchProfileStats().then(setStats).catch(() => {});
  }, []);

  useEffect(() => {
    setEmailInput(stats.email && stats.email !== user?.email ? stats.email : user?.email || "");
  }, [stats, user]);

  useEffect(() => {
    if (profile?.avatarUrl) setAvatarUrl(profile.avatarUrl);
  }, [profile?.avatarUrl]);

  if (!user) return null;

  const mainEmail = stats.email && stats.email !== user.email ? stats.email : user.email;
  const oldEmail = stats.email && stats.email !== user.email ? user.email : null;
  const fullName = profile?.fullName || user.name || mainEmail;
  const initials = fullName
    ? fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const regDateString = stats.createdAt
    ? new Date(stats.createdAt).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  const userIdShort = user.id ? user.id.slice(0, 8) : "";
  const telegram = stats.telegram || "";

  const handleAvatarFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Ошибка", description: "Можно загрузить только изображение.", variant: "destructive" });
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      toast({ title: "Ошибка", description: "Максимальный размер файла — 3МБ.", variant: "destructive" });
      return;
    }

    setAvatarLoading(true);
    try {
      const result = await updateAvatarApi(file, user.id);
      if (!result.success || !result.url) throw new Error("Fail");
      setAvatarUrl(result.url);
      toast({ title: "Успешно", description: "Аватар обновлён" });
      if (refresh) await refresh();
    } catch {
      toast({ title: "Ошибка", description: "Не удалось загрузить аватар", variant: "destructive" });
    } finally {
      setAvatarLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleEmailSave = async () => {
    if (!emailInput || emailInput === mainEmail) {
      setEditEmail(false);
      return;
    }
    setEmailLoading(true);
    try {
      const res = await updateEmailApi(emailInput);
      if (!res.success) throw new Error("Failed");
      setStats((prev) => ({ ...prev, email: emailInput }));
      toast({
        title: "Успешно",
        description: "Почта обновлена. Проверьте почту для подтверждения.",
      });
      setEditEmail(false);
      if (refresh) await refresh();
    } catch {
      toast({ title: "Ошибка", description: "Не удалось изменить email.", variant: "destructive" });
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div className="card-gradient rounded-xl p-6 lg:p-8 border border-border/50">
      <div className="flex flex-col md:flex-row gap-6">
        {/* --- Avatar Section --- */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div
            className={`relative group cursor-pointer w-36 h-36 transition-transform duration-300 hover:scale-[1.03]`}
            onClick={() => !avatarLoading && fileInputRef.current?.click()}
          >
            <Avatar className="w-36 h-36 border-2 border-primary/40 shadow-lg">
              <AnimatePresence mode="wait">
                {avatarUrl ? (
                  <motion.div
                    key={avatarUrl}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <AvatarImage src={avatarUrl} alt="avatar" className="object-cover w-full h-full" />
                  </motion.div>
                ) : (
                  <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                    {initials}
                  </AvatarFallback>
                )}
              </AnimatePresence>
            </Avatar>

            {/* Camera overlay */}
            <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/40 rounded-full" />
              <div className="relative m-2 rounded-full bg-white/75 p-2 shadow-md z-10">
                <Camera className="w-6 h-6 text-primary" />
              </div>
            </div>

            {avatarLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full">
                <svg className="animate-spin h-7 w-7 text-primary" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarFileChange}
            />
          </div>

          <Badge variant="secondary" className="text-sm">
            {user.role === "admin" ? "Admin" : "User"}
          </Badge>
        </div>

        {/* --- Info Section --- */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{fullName}</h2>
            <p className="text-muted-foreground">
              {regDateString !== "—" ? `Участник с ${regDateString}` : "—"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{oldEmail ? "Новая почта" : "Email"}</p>
                {editEmail ? (
                  <div className="flex gap-2 items-center mt-1">
                    <Input
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Новый email"
                      className="max-w-xs h-8 px-2 py-1 text-sm"
                      disabled={emailLoading}
                      autoFocus
                      type="email"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleEmailSave}
                      disabled={
                        emailLoading || !emailInput || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput)
                      }
                      className="px-2"
                    >
                      {emailLoading ? "..." : "Сохранить"}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setEditEmail(false)}
                      className="w-7 h-7"
                      type="button"
                    >
                      ✕
                    </Button>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-medium text-foreground inline-block">{mainEmail}</p>
                    <Button
                      size="sm"
                      variant="link"
                      className="px-1 text-xs ml-2"
                      onClick={() => setEditEmail(true)}
                      type="button"
                    >
                      Изменить
                    </Button>
                  </>
                )}
                {oldEmail && !editEmail && (
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="opacity-70">Старая: {oldEmail}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Telegram</p>
                <p className="text-sm font-medium text-foreground">{telegram || "—"}</p>
              </div>
            </div>

            {/* Дата регистрации */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Дата регистрации</p>
                <p className="text-sm font-medium text-foreground">{regDateString}</p>
              </div>
            </div>

            {/* ID */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Hash className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">ID пользователя</p>
                <p className="text-sm font-medium text-foreground">#{userIdShort}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="pt-4 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Всего пополнений</p>
                <p className="text-xl font-bold text-foreground">
                  ${stats.totalTopups.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Активных серверов</p>
                <p className="text-xl font-bold text-foreground">{stats.activeServers}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Реферальный доход</p>
                <p className="text-xl font-bold text-foreground">
                  ${stats.referralIncome.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
