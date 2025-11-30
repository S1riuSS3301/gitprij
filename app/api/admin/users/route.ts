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

  if (userId) {
    // Get detailed user info
    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        orders: { where: { status: "active" } },
        transactions: { where: { status: "completed" } },
        _count: { select: { orders: true, transactions: true } }
      }
    })

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

    const totalDeposits = user.transactions.reduce((sum, t) => sum + t.amount, 0)
    const activeServers = user.orders.length

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      ip: user.ip,
      banned: user.banned,
      bannedBy: user.bannedBy,
      bannedAt: user.bannedAt,
      balance: user.profile?.balance || 0,
      totalDeposits,
      activeServers,
      ordersCount: user._count.orders,
      transactionsCount: user._count.transactions,
      createdAt: user.createdAt
    })
  }

  // Get all users list
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      ip: true,
      banned: true,
      createdAt: true,
      _count: { select: { orders: true, transactions: true } }
    }
  })
  return NextResponse.json(users)
}

export async function PATCH(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { userId, action, role } = await request.json()
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 })

  const updateData: any = {}

  if (role) {
    updateData.role = String(role).toLowerCase()
  }

  if (action === "ban") {
    updateData.banned = true
    updateData.bannedBy = auth.userId
    updateData.bannedAt = new Date()
  } else if (action === "unban") {
    updateData.banned = false
    updateData.bannedBy = null
    updateData.bannedAt = null
  }

  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ error: "No valid action or role provided" }, { status: 400 })
  }

  const updated = await db.user.update({ where: { id: userId }, data: updateData })
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
