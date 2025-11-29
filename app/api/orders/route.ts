import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const authUser = await getAuthUser()

    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const orders = await db.order.findMany({
      where: { userId: authUser.userId },
      include: { serverPlan: true },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error("[v0] Error fetching orders:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const authUser = await getAuthUser()

    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { server_plan_id, billing_period, server_name } = body

    const plan = await db.serverPlan.findUnique({
      where: { id: server_plan_id },
    })

    if (!plan) {
      return NextResponse.json({ error: "Server plan not found" }, { status: 404 })
    }

    // Calculate price based on billing period (base: monthly price)
    let pricePaid = plan.price
    if (billing_period === "quarterly") {
      pricePaid = plan.price * 3 * 0.95 // 5% discount
    } else if (billing_period === "yearly") {
      pricePaid = plan.price * 12 * 0.9 // 10% discount
    }

    // Calculate expiration date
    const expiresAt = new Date()
    if (billing_period === "monthly") {
      expiresAt.setMonth(expiresAt.getMonth() + 1)
    } else if (billing_period === "quarterly") {
      expiresAt.setMonth(expiresAt.getMonth() + 3)
    } else if (billing_period === "yearly") {
      expiresAt.setFullYear(expiresAt.getFullYear() + 1)
    }

    // Получаем профиль пользователя
    const profile = await db.profile.findUnique({ where: { userId: authUser.userId } })
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 403 })
    }
    if (profile.balance < pricePaid) {
      return NextResponse.json({ error: "Недостаточно средств на балансе" }, { status: 402 })
    }

    // Всё делаем в транзакции: списание, создание заказа, транзакция-история
    const [order] = await db.$transaction([
      db.profile.update({
        where: { userId: authUser.userId },
        data: { balance: { decrement: pricePaid } },
      }),
      db.order.create({
        data: {
          userId: authUser.userId,
          serverPlanId: server_plan_id,
          pricePaid,
          billingPeriod: billing_period || "monthly",
          serverName: server_name || `Server ${Date.now()}`,
          status: "active",
          expiresAt,
        },
      }),
      db.transaction.create({
        data: {
          userId: authUser.userId,
          amount: -pricePaid,
          currency: "USD",
          method: "balance",
          status: "completed",
          description: `Оплата сервера (${server_plan_id}) через баланс`,
          type: "purchase"
        },
      }),
    ])
    return NextResponse.json(order)
  } catch (error) {
    console.error("[v0] Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
