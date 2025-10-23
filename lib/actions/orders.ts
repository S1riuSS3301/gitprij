"use server"

import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"
import { revalidatePath } from "next/cache"

export async function createOrder(serverPlanId: string, billingPeriod: string, serverName?: string) {
  const authUser = await getAuthUser()

  if (!authUser) {
    throw new Error("Unauthorized")
  }

  // Get server plan details
  const plan = await db.serverPlan.findUnique({
    where: { id: serverPlanId },
  })

  if (!plan) {
    throw new Error("Server plan not found")
  }

  // Calculate price based on billing period
  let pricePaid = plan.priceMonthly
  if (billingPeriod === "quarterly") {
    pricePaid = plan.priceMonthly * 3 * 0.95 // 5% discount
  } else if (billingPeriod === "yearly") {
    pricePaid = plan.priceMonthly * 12 * 0.9 // 10% discount
  }

  // Calculate expiration date
  const expiresAt = new Date()
  if (billingPeriod === "monthly") {
    expiresAt.setMonth(expiresAt.getMonth() + 1)
  } else if (billingPeriod === "quarterly") {
    expiresAt.setMonth(expiresAt.getMonth() + 3)
  } else if (billingPeriod === "yearly") {
    expiresAt.setFullYear(expiresAt.getFullYear() + 1)
  }

  // Create order
  const order = await db.order.create({
    data: {
      userId: authUser.userId,
      serverPlanId,
      pricePaid,
      billingPeriod,
      serverName,
      status: "active",
      expiresAt,
    },
  })

  revalidatePath("/dashboard")
  return order
}

export async function getUserOrders() {
  const authUser = await getAuthUser()

  if (!authUser) {
    return []
  }

  const orders = await db.order.findMany({
    where: { userId: authUser.userId },
    include: {
      serverPlan: true,
    },
    orderBy: { createdAt: "desc" },
  })

  return orders
}
