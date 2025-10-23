import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { getUser } from "@/lib/auth-utils"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await getUser()
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name, nameRu, cpu, ram, storage, bandwidth, price, popular, description } = body

    // Update the plan in localStorage
    const plans = db.serverPlan.findMany()
    const planIndex = (await plans).findIndex((p) => p.id === params.id)

    if (planIndex === -1) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 })
    }

    const allPlans = await plans
    allPlans[planIndex] = {
      ...allPlans[planIndex],
      name,
      nameRu,
      cpu,
      ram,
      storage,
      bandwidth,
      price,
      popular,
      description,
    }

    // Save back to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("serverPlans", JSON.stringify(allPlans))
    }

    return NextResponse.json(allPlans[planIndex])
  } catch (error) {
    console.error("[v0] Error updating server plan:", error)
    return NextResponse.json({ error: "Failed to update server plan" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await getUser()
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Delete the plan from localStorage
    const plans = await db.serverPlan.findMany()
    const filteredPlans = plans.filter((p) => p.id !== params.id)

    // Save back to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("serverPlans", JSON.stringify(filteredPlans))
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting server plan:", error)
    return NextResponse.json({ error: "Failed to delete server plan" }, { status: 500 })
  }
}
