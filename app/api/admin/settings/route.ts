import { NextResponse } from "next/server"
import { getAuthUser } from "@/lib/auth-utils"
import { db } from "@/lib/db"

export async function GET() {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const settings = await db.setting.findMany()
  const settingsObj: Record<string, string> = {}
  settings.forEach(s => {
    settingsObj[s.key] = s.value
  })

  return NextResponse.json(settingsObj)
}

export async function PATCH(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const updates = await request.json()

  for (const [key, value] of Object.entries(updates)) {
    await db.setting.upsert({
      where: { key },
      update: { value: String(value) },
      create: { key, value: String(value) }
    })
  }

  return NextResponse.json({ success: true })
}
