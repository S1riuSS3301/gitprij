import { NextResponse } from "next/server"
import { getAuthUser } from "@/lib/auth-utils"
import { db } from "@/lib/db"

export async function GET(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const email = searchParams.get("email")

  let where: any = {}

  if (userId) where.userId = userId
  if (email) {
    const user = await db.user.findUnique({ where: { email } })
    if (user) where.userId = user.id
  }

  const servers = await db.order.findMany({
    where,
    include: {
      user: { select: { email: true, name: true } },
      serverPlan: true
    },
    orderBy: { createdAt: "desc" }
  })

  return NextResponse.json(servers)
}

export async function PATCH(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { orderId, status, serverName } = await request.json()
  if (!orderId) return NextResponse.json({ error: "orderId required" }, { status: 400 })

  const updateData: any = {}
  if (status) updateData.status = status
  if (serverName) updateData.serverName = serverName

  const updated = await db.order.update({
    where: { id: orderId },
    data: updateData
  })

  return NextResponse.json(updated)
}

export async function DELETE(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get("orderId")
  if (!orderId) return NextResponse.json({ error: "orderId required" }, { status: 400 })

  await db.order.delete({ where: { id: orderId } })
  return NextResponse.json({ success: true })
}
