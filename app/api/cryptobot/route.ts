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
  const apiToken = process.env.CRYPTOBOT_API_TOKEN!

  if (!apiToken) {
    return NextResponse.json({
      success: false,
      error: '❌ CryptoBot API token'
    }, { status: 500 })
  }

  const res = await fetch(`https://pay.crypt.bot/api/getInvoice?id=${id}`, {
    headers: {
      'Crypto-Pay-API-Token': apiToken
    }
  })

  const data = await res.json()

  if (!res.ok || !data.ok) {
    return NextResponse.json({
      success: false,
      error: data.error?.name || 'API Error'
    }, { status: 400 })
  }

  const invoice = data.result
  const userId = invoice.payload // Assume payload contains userId

  if (!userId) {
    return NextResponse.json({
      success: false,
      error: '❌ userId not found in payload'
    }, { status: 400 })
  }

  const isPaid = invoice.status === 'paid'

  if (isPaid) {
    await autoCredit(userId, id, Number(invoice.amount), invoice.asset)
  }

  return NextResponse.json({
    success: true,
    paid: isPaid,
    status: invoice.status,
    amount: invoice.amount,
    userId,
    message: isPaid ? '✅ Paid & Credited!' : '⏳ Waiting...'
  })
}

async function autoCredit(userId: string, externalId: string, amount: number, currency: string) {
  await prisma.$transaction(async (tx: any) => {
    const transaction = await tx.transaction.updateMany({
      where: {
        externalId,
        method: 'cryptobot',
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

    // +BALANCE with 5% commission for crypto
    const creditedAmount = amount * 0.95

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
          currency: 'USD',
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
  const { amount, description, userId, currency = "USDT", lifetime = 60 } = body

  if (!userId || !amount || amount < 10) {
    return NextResponse.json({
      success: false,
      error: '❌ userId + ≥$10'
    }, { status: 400 })
  }

  const apiToken = process.env.CRYPTOBOT_API_TOKEN!

  // Add random amount 0.01-1$ for identification
  const randomAddition = (Math.random() * 0.99) + 0.01
  const totalAmount = amount + randomAddition

  const payload = {
    asset: currency,
    amount: totalAmount.toFixed(2),
    description: description || "Balance topup",
    hidden_message: `User ID: ${userId}`,
    paid_btn_name: "View Item",
    paid_btn_url: `${process.env.BASE_URL}/dashboard/billing?success=true`,
    payload: userId // Store userId in payload
  }

  const res = await fetch("https://pay.crypt.bot/api/createInvoice", {
    method: "POST",
    headers: {
      'Crypto-Pay-API-Token': apiToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok || !data.ok) {
    return NextResponse.json({
      success: false,
      error: data.error?.name || 'API Error'
    }, { status: 400 })
  }

  const invoice = data.result

  await prisma.transaction.create({
    data: {
      userId,
      amount: Number(invoice.amount),
      currency: invoice.asset,
      method: 'cryptobot',
      status: 'pending',
      externalId: String(invoice.invoice_id),
    },
  })

  return NextResponse.json({
    success: true,
    url: invoice.pay_url,
    id: invoice.invoice_id,
    message: '✅ Ready! Redirecting...'
  })
}
