import { NextResponse } from "next/server"
import { getAuthUser } from "@/lib/auth-utils"
import { db } from "@/lib/db"

export async function GET() {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }
  const users = await db.user.findMany()
  return NextResponse.json(users.map((u) => ({ id: u.id, email: u.email, name: u.name, role: u.role, createdAt: u.createdAt })))
}

export async function PATCH(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }
  const { userId, role } = await request.json()
  if (!userId || !role) return NextResponse.json({ error: "userId and role required" }, { status: 400 })

  const updated = await db.user.update({ where: { id: userId }, data: { role: String(role).toLowerCase() } })
  if (!updated) return NextResponse.json({ error: "User not found" }, { status: 404 })
  return NextResponse.json({ success: true })
}

export async function DELETE(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 })
  await db.user.delete({ where: { id: userId } })
  return NextResponse.json({ success: true })
}


