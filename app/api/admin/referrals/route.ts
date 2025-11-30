import { NextResponse } from "next/server"
import { getAuthUser } from "@/lib/auth-utils"
import { db } from "@/lib/db"

export async function GET() {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const referrals = await db.referral.findMany({
    include: {
      referrer: { select: { email: true, name: true } },
      referred: { select: { email: true, name: true } }
    },
    orderBy: { createdAt: "desc" }
  })

  const stats = {
    totalReferrals: referrals.length,
    totalEarnings: referrals.reduce((sum, r) => sum + r.earnings, 0)
  }

  return NextResponse.json({ referrals, stats })
}
