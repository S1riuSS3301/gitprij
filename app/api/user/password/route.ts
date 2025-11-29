import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"
import { hashPassword, comparePassword } from "@/lib/auth-utils"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const authUser = await getAuthUser()

    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { currentPassword, newPassword } = body

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Текущий и новый пароль обязательны" }, { status: 400 })
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: "Новый пароль должен быть не менее 8 символов" }, { status: 400 })
    }

    const user = await db.user.findUnique({
      where: { id: authUser.userId },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const isValid = await comparePassword(currentPassword, user.password)
    if (!isValid) {
      return NextResponse.json({ error: "Неверный текущий пароль" }, { status: 401 })
    }

    const hashedPassword = await hashPassword(newPassword)

    await db.user.update({
      where: { id: authUser.userId },
      data: { password: hashedPassword },
    })

    return NextResponse.json({ success: true, message: "Пароль успешно изменен" })
  } catch (error) {
    console.error("[v0] Error changing password:", error)
    return NextResponse.json({ error: "Failed to change password" }, { status: 500 })
  }
}

