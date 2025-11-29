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

    const updated = await db.serverPlan.update({
      where: { id: params.id },
      data: { name, nameRu, cpu, ram, storage, bandwidth, price, popular, description },
    })

    if (!updated) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 })
    }

    return NextResponse.json(updated)
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

    await db.serverPlan.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting server plan:", error)
    return NextResponse.json({ error: "Failed to delete server plan" }, { status: 500 })
  }
}
