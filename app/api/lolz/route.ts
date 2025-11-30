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
  const apiKey = process.env.LOLZ_API_KEY!

  if (!apiKey) {
    return NextResponse.json({
      success: false,
      error: '❌ Lolz API key'
    }, { status: 500 })
  }

  const res = await fetch(`https://lolz.live/api/market/payment/${id}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json()

  if (!res.ok || data.errors) {
    return NextResponse.json({
      success: false,
      error: data.errors?.[0] || 'API Error'
    }, { status: 400 })
  }

  const payment = data.payment
  const userId = payment.comment // Assume comment contains userId

  if (!userId) {
    return NextResponse.json({
      success: false,
      error: '❌ userId not found in comment'
    }, { status: 400 })
  }

  const isPaid = payment.status === 'success'

  if (isPaid) {
    await autoCredit(userId, id, Number(payment.amount), payment.currency || 'RUB')
  }

  return NextResponse.json({
    success: true,
    paid: isPaid,
    status: payment.status,
    amount: payment.amount,
    userId,
    message: isPaid ? '✅ Paid & Credited!' : '⏳ Waiting...'
  })
}

async function autoCredit(userId: string, externalId: string, amount: number, currency: string) {
  await prisma.$transaction(async (tx: any) => {
    const transaction = await tx.transaction.updateMany({
      where: {
        externalId,
        method: 'lolz',
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

    // +BALANCE with 0% commission for lolz
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

  if (!userId || !amount || amount < 100) {
    return NextResponse.json({
      success: false,
      error: '❌ userId + ≥100 RUB'
    }, { status: 400 })
  }

  const apiKey = process.env.LOLZ_API_KEY!

  const payload = {
    amount: Number(amount.toFixed(2)),
    currency,
    comment: userId, // Store userId in comment
    redirect_url: `${process.env.BASE_URL}/dashboard/billing?tx=${Date.now()}`
  }

  const res = await fetch("https://lolz.live/api/market/payment", {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok || data.errors) {
    return NextResponse.json({
      success: false,
      error: data.errors?.join(', ') || 'API Error'
    }, { status: 400 })
  }

  const payment = data.payment

  await prisma.transaction.create({
    data: {
      userId,
      amount: Number(payment.amount),
      currency: payment.currency || 'RUB',
      method: 'lolz',
      status: 'pending',
      externalId: String(payment.id),
    },
  })

  return NextResponse.json({
    success: true,
    url: payment.url,
    id: payment.id,
    message: '✅ Ready! Redirecting...'
  })
}
