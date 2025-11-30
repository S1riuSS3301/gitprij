import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { hashPassword } from "@/lib/auth-utils"

export async function POST(request: Request) {
  const { token, password } = await request.json()

  if (!token || !password) {
    return NextResponse.json({ error: "Token and password required" }, { status: 400 })
  }

  const user = await db.user.findFirst({
    where: {
      resetToken: token,
      resetExpires: {
        gt: new Date()
      }
    }
  })

  if (!user) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 })
  }

  const hashedPassword = await hashPassword(password)

  await db.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      resetToken: null,
      resetExpires: null
    }
  })

  return NextResponse.json({ success: true })
}
