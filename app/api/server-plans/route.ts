import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { getUser } from "@/lib/auth-utils"

export async function GET() {
  try {
    const plans = await db.serverPlan.findMany()
    return NextResponse.json(plans)
  } catch (error) {
    console.error("[v0] Error fetching server plans:", error)
    return NextResponse.json({ error: "Failed to fetch server plans" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await getUser()
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name, nameRu, cpu, ram, storage, bandwidth, price, popular, description } = body

    const newPlan = await db.serverPlan.create({
      data: {
        name,
        nameRu,
        cpu,
        ram,
        storage,
        bandwidth,
        price,
        popular: popular || false,
        description: description || null,
      },
    })

    return NextResponse.json(newPlan)
  } catch (error) {
    console.error("[v0] Error creating server plan:", error)
    return NextResponse.json({ error: "Failed to create server plan" }, { status: 500 })
  }
}
