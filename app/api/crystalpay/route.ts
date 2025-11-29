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
  const auth_login = process.env.AUTH_LOGIN!
  const auth_secret = process.env.AUTH_SECRET!

  if (!auth_login || !auth_secret) {
    return NextResponse.json({
      success: false,
      error: '❌ Credentials'
    }, { status: 500 })
  }

  const res = await fetch('https://api.crystalpay.io/v3/invoice/status/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ auth_login, auth_secret, id }),
  })

  const data = await res.json()

  if (!res.ok || data.error) {
    return NextResponse.json({
      success: false,
      error: data.errors?.[0] || data.error || 'API Error'
    }, { status: 400 })
  }

  // 👤 PARSE userId из extra
  const userIdMatch = data.extra?.match(/userId:([a-zA-Z0-9_-]+)/)
  const userId = userIdMatch?.[1]

  if (!userId) {
    return NextResponse.json({
      success: false,
      error: '❌ userId не найден в extra'
    }, { status: 400 })
  }

  const isPaid = data.state === 'payed'


  if (isPaid) {
    await autoCredit(userId, String(id), Number(data.amount), data.currency)
  }

  // 🎉 RESPONSE
  return NextResponse.json({
    success: true,
    paid: isPaid,
    status: data.state,
    amount: data.amount,
    userId,
    message: isPaid ? '✅ ОПЛАЧЕНО & ПОПОЛНЕНО!' : '⏳ Ожидаем...'
  })
}

// 🔥 2. AUTO-CREDIT (idempotent)
async function autoCredit(userId: string, externalId: string, amount: number, currency: string) {
  await prisma.$transaction(async (tx: any) => {
    // Transaction exists? Update
    const transaction = await tx.transaction.updateMany({
      where: {
        externalId,
        method: 'crystalpay',
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

    // 💵 +BALANCE
    await tx.profile.update({
      where: { userId },
      data: { balance: { increment: amount } },
    })

    // Реферальный бонус (10%)
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: { referredBy: true },
    })

    if (user?.referredBy) {
      const referralBonus = amount * 0.1
      
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
          description: `Реферальный бонус 10% от пополнения пользователя`,
          type: 'referral',
          completedAt: new Date(),
        },
      })
    }
  })
}

// 🔥 3. CREATE INVOICE (твой код + lifetime/body)
async function handleCreateInvoice(body: any) {
  const { amount, description, userId, currency = "USD", lifetime = 60 } = body

  // VALIDATION
  if (!userId || !amount || amount < 10) {
    return NextResponse.json({
      success: false,
      error: '❌ userId + ≥$10'
    }, { status: 400 })
  }

  const auth_login = process.env.AUTH_LOGIN!
  const auth_secret = process.env.AUTH_SECRET!
  let redirect_url = process.env.REDIRECT_URL || "localhost:3000/dashboard/billing"

  if (!redirect_url.startsWith("http")) redirect_url = `https://${redirect_url.replace(/^\/+/, "")}`
  // Добавляем параметры для возврата с платежной системы
  redirect_url += `?tx=${Date.now()}`

  // Используем JSON формат для extra (более надежный)
  const payload = {
    auth_login,
    auth_secret,
    amount: Number(amount.toFixed(2)),
    lifetime, // Из body!
    type: "topup",
    currency: currency,
    description: description || "Пополнение баланса",
    extra: JSON.stringify({ userId }), // JSON формат для надежности
    redirect_url,
  }

  const res = await fetch("https://api.crystalpay.io/v3/invoice/create/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok || data.error) {
    return NextResponse.json({
      success: false,
      error: data.errors?.join(', ') || data.error || 'API Error'
    }, { status: 400 })
  }

  // 🗄️ TRANSACTION
  await prisma.transaction.create({
    data: {
      userId,
      amount: Number(data.amount),
      currency: data.currency ?? "USD",
      method: 'crystalpay',
      status: 'pending',
      externalId: String(data.id),
    },
  })

  return NextResponse.json({
    success: true,
    url: data.url, // Редирект сюда!
    id: data.id,
    message: '✅ Готово! Переходим...'
  })
}