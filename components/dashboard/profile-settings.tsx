"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"

export function ProfileSettings() {
  const { user, refresh } = useAuth()
  const { toast } = useToast()
  const { language } = useLanguage()
  const [fullName, setFullName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [passwordLoading, setPasswordLoading] = useState(false)

  useEffect(() => {
    if (user?.profile?.fullName) {
      setFullName(user.profile.fullName)
    }
  }, [user])

  const handleSaveProfile = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName }),
      })

      if (!res.ok) {
        throw new Error("Failed to update profile")
      }

      await refresh()
      toast({
        title: language === "ru" ? "Успешно" : "Success",
        description: language === "ru" ? "Профиль обновлен" : "Profile updated",
      })
    } catch (error) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: language === "ru" ? "Не удалось обновить профиль" : "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: language === "ru" ? "Пароли не совпадают" : "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    if (newPassword.length < 8) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: language === "ru" ? "Пароль должен быть не менее 8 символов" : "Password must be at least 8 characters",
        variant: "destructive",
      })
      return
    }

    setPasswordLoading(true)
    try {
      const res = await fetch("/api/user/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to change password")
      }

      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
      toast({
        title: language === "ru" ? "Успешно" : "Success",
        description: language === "ru" ? "Пароль успешно изменен" : "Password changed successfully",
      })
    } catch (error: any) {
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description: error.message || (language === "ru" ? "Не удалось изменить пароль" : "Failed to change password"),
        variant: "destructive",
      })
    } finally {
      setPasswordLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-xl p-6 lg:p-8 border border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-6">
          {language === "ru" ? "Настройки профиля" : "Profile Settings"}
        </h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground">
              {language === "ru" ? "Полное имя" : "Full Name"}
            </Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary"
              placeholder={language === "ru" ? "Введите ваше имя" : "Enter your name"}
            />
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90" 
            onClick={handleSaveProfile}
            disabled={loading}
          >
            {loading 
              ? (language === "ru" ? "Сохранение..." : "Saving...")
              : (language === "ru" ? "Сохранить изменения" : "Save changes")
            }
          </Button>
        </div>
      </div>

      <div className="card-gradient rounded-xl p-6 lg:p-8 border border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-6">
          {language === "ru" ? "Изменить пароль" : "Change Password"}
        </h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-foreground">
              {language === "ru" ? "Текущий пароль" : "Current Password"}
            </Label>
            <Input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-foreground">
              {language === "ru" ? "Новый пароль" : "New Password"}
            </Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-new-password" className="text-foreground">
              {language === "ru" ? "Подтвердите новый пароль" : "Confirm New Password"}
            </Label>
            <Input
              id="confirm-new-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90" 
            onClick={handleChangePassword}
            disabled={passwordLoading}
          >
            {passwordLoading
              ? (language === "ru" ? "Изменение..." : "Changing...")
              : (language === "ru" ? "Изменить пароль" : "Change Password")
            }
          </Button>
        </div>
      </div>
    </div>
  )
}
