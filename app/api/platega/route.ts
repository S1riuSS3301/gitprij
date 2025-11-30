import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (body.id) {
      return handleStatusCheck(body.id)
    }

    return handleCreateInvoice(body)

  } catch (err: any) {
    console.error('🚫 Error:', err)
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}

async function handleStatusCheck(id: string) {
  const apiKey = process.env.PLATEGA_API_KEY!
  const apiSecret = process.env.PLATEGA_API_SECRET!

  if (!apiKey || !apiSecret) {
    return NextResponse.json({
      success: false,
      error: '❌ Platega.io credentials'
    }, { status: 500 })
  }

  const res = await fetch(`https://api.platega.io/v1/payments/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json()

  if (!res.ok || data.error) {
    return NextResponse.json({
      success: false,
      error: data.errors?.[0] || data.error || 'API Error'
    }, { status: 400 })
  }

  const userId = data.metadata?.userId

  if (!userId) {
    return NextResponse.json({
      success: false,
      error: '❌ userId not found in metadata'
    }, { status: 400 })
  }

  const isPaid = data.status === 'completed'

  if (isPaid) {
    await autoCredit(userId, id, Number(data.amount), data.currency)
  }

  return NextResponse.json({
    success: true,
    paid: isPaid,
    status: data.status,
    amount: data.amount,
    userId,
    message: isPaid ? '✅ Paid & Credited!' : '⏳ Waiting...'
  })
}

async function autoCredit(userId: string, externalId: string, amount: number, currency: string) {
  await prisma.$transaction(async (tx: any) => {
    const transaction = await tx.transaction.updateMany({
      where: {
        externalId,
        method: 'platega',
        status: 'pending',
      },
      data: {
        status: 'completed',
        completedAt: new Date(),
      },
    })

    if (transaction.count === 0) {
      return
    }

    // +BALANCE with 0% commission for fiat via platega
    const creditedAmount = amount

    await tx.profile.update({
      where: { userId },
      data: { balance: { increment: creditedAmount } },
    })

    // Referral bonus 5%
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: { referredBy: true },
    })

    if (user?.referredBy) {
      const referralBonus = amount * 0.05

      await tx.profile.update({
        where: { userId: user.referredBy },
        data: { balance: { increment: referralBonus } },
      })

      await tx.referral.updateMany({
        where: {
          referrerId: user.referredBy,
          referredId: userId,
        },
        data: {
          earnings: { increment: referralBonus },
        },
      })

      await tx.transaction.create({
        data: {
          userId: user.referredBy,
          amount: referralBonus,
          currency: 'RUB',
          method: 'referral',
          status: 'completed',
          description: `Referral bonus 5% from deposit`,
          type: 'referral',
          completedAt: new Date(),
        },
      })
    }
  })
}

async function handleCreateInvoice(body: any) {
  const { amount, description, userId, currency = "RUB", lifetime = 60 } = body

  if (!userId || !amount || amount < 100) { // Min 100 RUB
    return NextResponse.json({
      success: false,
      error: '❌ userId + ≥100 RUB'
    }, { status: 400 })
  }

  const apiKey = process.env.PLATEGA_API_KEY!
  const apiSecret = process.env.PLATEGA_API_SECRET!
  let redirect_url = process.env.REDIRECT_URL || "localhost:3000/dashboard/billing"

  if (!redirect_url.startsWith("http")) redirect_url = `https://${redirect_url.replace(/^\/+/, "")}`
  redirect_url += `?tx=${Date.now()}`

  const payload = {
    amount: Number(amount.toFixed(2)),
    currency,
    description: description || "Balance topup",
    metadata: { userId },
    redirect_url,
    webhook_url: `${process.env.BASE_URL}/api/platega/webhook`,
    auto_confirm: true // Auto confirmation for fiat
  }

  const res = await fetch("https://api.platega.io/v1/payments", {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok || data.error) {
    return NextResponse.json({
      success: false,
      error: data.errors?.join(', ') || data.error || 'API Error'
    }, { status: 400 })
  }

  await prisma.transaction.create({
    data: {
      userId,
      amount: Number(data.amount),
      currency: data.currency ?? "RUB",
      method: 'platega',
      status: 'pending',
      externalId: String(data.id),
    },
  })

  return NextResponse.json({
    success: true,
    url: data.payment_url,
    id: data.id,
    message: '✅ Ready! Redirecting...'
  })
}
