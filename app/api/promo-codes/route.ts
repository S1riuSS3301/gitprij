import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"

export async function GET() {
  const list = await db.promoCode.findMany()
  return NextResponse.json(list)
}

export async function POST(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }
  const body = await request.json()
  const { code, discount, type, maxUses, expiresAt, active } = body
  if (!code || !discount || !type || !maxUses || !expiresAt) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }
  const created = await db.promoCode.create({
    data: { code, discount: Number(discount), type, maxUses: Number(maxUses), expiresAt, active: Boolean(active) },
  })
  return NextResponse.json(created)
}


