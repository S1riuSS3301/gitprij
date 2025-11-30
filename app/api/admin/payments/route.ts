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
  const status = searchParams.get("status")

  let where: any = {}
  if (userId) where.userId = userId
  if (status) where.status = status

  const transactions = await db.transaction.findMany({
    where,
    include: {
      user: { select: { email: true, name: true } }
    },
    orderBy: { createdAt: "desc" }
  })

  // Calculate totals
  const totalRevenue = transactions
    .filter(t => t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  const commissions = {
    crypto: 5, // percent
    fiat: 0
  }

  return NextResponse.json({
    transactions,
    stats: {
      totalRevenue,
      totalTransactions: transactions.length,
      completedTransactions: transactions.filter(t => t.status === "completed").length,
      commissions
    }
  })
}

export async function PATCH(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { cryptoCommission, fiatCommission, minPaymentAmount } = await request.json()

  // TODO: Save to settings table or config
  // For now, just return success

  return NextResponse.json({ success: true })
}
