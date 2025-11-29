import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"

export async function GET() {
  const auth = await getAuthUser()
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const list = await db.notification.findMany()
  return NextResponse.json(list)
}

export async function POST(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { title, message } = await request.json()
  if (!title || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  const created = await db.notification.create({ data: { title, message } })
  return NextResponse.json(created)
}


