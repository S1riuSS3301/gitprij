"use server"

import { db } from "@/lib/db"
import { hashPassword, comparePassword, setAuthCookie, clearAuthCookie, getAuthUser } from "@/lib/auth-utils"
import { signToken } from "@/lib/jwt"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signIn(email: string, password: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
      include: { profile: true },
    })

    if (!user) {
      return { error: "Неверный email или пароль" }
    }

    const isValid = await comparePassword(password, user.password)
    if (!isValid) {
      return { error: "Неверный email или пароль" }
    }

    const token = await signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    })

    await setAuthCookie(token)
    return { success: true }
  } catch (error) {
    console.error("[v0] Sign in error:", error)
    return { error: "Ошибка входа" }
  }
}

export async function signUp(email: string, password: string, name?: string, referralCode?: string) {
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return { error: "Пользователь с таким email уже существует" }
    }

    const hashedPassword = await hashPassword(password)
    
    // Генерируем уникальный реферальный код
    const userReferralCode = Math.random().toString(36).substring(2, 10).toUpperCase()
    
    // Проверяем реферальный код если указан
    let referrerId: string | undefined
    if (referralCode) {
      const referrer = await db.user.findUnique({
        where: { referralCode },
      })
      if (referrer) {
        referrerId = referrer.id
      }
    }

    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        referralCode: userReferralCode,
        referredBy: referrerId,
        profile: {
          create: {
            balance: 0,
          },
        },
      },
    })

    // Создаем запись о реферале если есть реферер
    if (referrerId) {
      await db.referral.create({
        data: {
          referrerId,
          referredId: user.id,
          earnings: 0,
        },
      })
    }

    const token = await signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    })

    await setAuthCookie(token)
    return { success: true }
  } catch (error) {
    console.error("[v0] Sign up error:", error)
    return { error: "Ошибка регистрации" }
  }
}

export async function signOut() {
  await clearAuthCookie()
  revalidatePath("/", "layout")
  redirect("/")
}

export async function getUser() {
  const authUser = await getAuthUser()
  if (!authUser) return null

  const user = await db.user.findUnique({
    where: { id: authUser.userId },
    include: { profile: true },
  })

  return user
}

export async function getUserProfile() {
  const authUser = await getAuthUser()
  if (!authUser) return null

  const profile = await db.profile.findUnique({
    where: { userId: authUser.userId },
  })

  return profile
}
