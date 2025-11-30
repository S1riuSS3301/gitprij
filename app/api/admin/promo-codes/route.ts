import { NextResponse } from "next/server"
import { getAuthUser } from "@/lib/auth-utils"
import { db } from "@/lib/db"

export async function GET() {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const promoCodes = await db.promoCode.findMany({
    include: {
      _count: { select: { usages: true } }
    },
    orderBy: { createdAt: "desc" }
  })

  return NextResponse.json(promoCodes)
}

export async function POST(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { code, discount, type, maxUses, expiresAt, active } = await request.json()

  if (!code || discount == null || !type || maxUses == null || !expiresAt) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const promoCode = await db.promoCode.create({
    data: {
      code,
      discount: Number(discount),
      type,
      maxUses: Number(maxUses),
      expiresAt: new Date(expiresAt),
      active: active ?? true
    }
  })

  return NextResponse.json(promoCode)
}

export async function PATCH(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { id, active } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "ID required" }, { status: 400 })
  }

  const updated = await db.promoCode.update({
    where: { id },
    data: { active: Boolean(active) }
  })

  return NextResponse.json(updated)
}

export async function DELETE(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID required" }, { status: 400 })
  }

  await db.promoCode.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
