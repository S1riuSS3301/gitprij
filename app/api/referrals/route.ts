import { db } from "@/lib/db"
import { getAuthUser } from "@/lib/auth-utils"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const authUser = await getAuthUser()

    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { id: authUser.userId },
      include: {
        referrals: {
          include: {
            referrer: {
              select: { email: true, name: true },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Получаем информацию о рефералах (пользователях, которых пригласили)
    const referredUserIds = user.referrals.map((ref) => ref.referredId)
    const referredUsers = await db.user.findMany({
      where: { id: { in: referredUserIds } },
      select: { id: true, email: true, name: true },
    })

    const referralsWithUsers = user.referrals.map((ref) => ({
      id: ref.id,
      referredId: ref.referredId,
      earnings: ref.earnings,
      createdAt: ref.createdAt,
      referredUser: referredUsers.find((u) => u.id === ref.referredId),
    }))

    const totalEarnings = user.referrals.reduce((sum, ref) => sum + ref.earnings, 0)

    return NextResponse.json({
      referralCode: user.referralCode,
      totalReferrals: user.referrals.length,
      totalEarnings,
      referrals: referralsWithUsers,
    })
  } catch (error) {
    console.error("[v0] Error fetching referrals:", error)
    return NextResponse.json({ error: "Failed to fetch referrals" }, { status: 500 })
  }
}

