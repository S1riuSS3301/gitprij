import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"

export async function GET() {
  try {
    // Получаем данные пользователя из токена
    const payload = await getAuthUser()
    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Пытаемся найти пользователя в базе по userId из токена
    const user = await db.user.findUnique({
      where: { id: payload.userId },
      include: { profile: true }
    })

    if (user) {
      return NextResponse.json({
        id: user.id,
        email: user.email,
        name: user.name ?? undefined,
        role: user.role,
      })
    }

    // Fallback: если пользователь в БД не найден, но токен валиден — вернуть данные из токена
    return NextResponse.json({
      id: payload.userId,
      email: payload.email,
      role: payload.role
    })
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
