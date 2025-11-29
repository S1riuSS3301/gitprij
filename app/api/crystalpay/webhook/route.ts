import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, state, signature, extra } = body

    // Используем SALT из env (должен быть AUTH_SECRET или CRYSTALPAY_SALT)
    const SALT = process.env.AUTH_SECRET || process.env.CRYSTALPAY_SALT

    if (!SALT) {
      return NextResponse.json({ error: 'Missing SALT' }, { status: 500 })
    }

    // Verify signature: sha1(id + ':' + SALT)
    const expectedSignature = crypto.createHash('sha1').update(`${id}:${SALT}`).digest('hex')
    if (signature !== expectedSignature) {
      console.warn('Invalid signature', { id, signature, expectedSignature })
      return NextResponse.json({ ok: false, error: 'Invalid signature' }, { status: 400 })
    }

    // Только конечные статусы
    if (!['payed', 'failed', 'cancelled'].includes(state)) {
      return NextResponse.json({ ok: true })
    }

    // Обрабатываем только успешные платежи
    if (state !== 'payed') {
      return NextResponse.json({ ok: true })
    }

    // Извлекаем userId из extra (поддерживаем и строку и JSON)
    const userId = extractUserIdFromExtra(extra)
    if (!userId) {
      console.warn('No userId in extra', { extra })
      return NextResponse.json({ ok: true })
    }

    const paymentAmount = Number(body.amount || 0)
    if (paymentAmount <= 0) {
      return NextResponse.json({ ok: true })
    }

    // Обновляем баланс (idempotent - только если транзакция pending)
    await prisma.$transaction(async (tx: any) => {
      // Проверяем существует ли транзакция и её статус
      const existingTx = await tx.transaction.findFirst({
        where: {
          externalId: String(id),
          method: 'crystalpay',
        },
      })

      // Если транзакция уже обработана - не делаем ничего (idempotent)
      if (existingTx && existingTx.status === 'completed') {
        return
      }

      // Обновляем баланс пользователя
      await tx.profile.update({ 
        where: { userId }, 
        data: { balance: { increment: paymentAmount } } 
      })

      // Обновляем или создаем транзакцию
      if (existingTx) {
        await tx.transaction.update({
          where: { id: existingTx.id },
          data: { status: 'completed', completedAt: new Date() },
        })
      } else {
        await tx.transaction.create({
          data: {
            userId,
            amount: paymentAmount,
            currency: 'USD',
            method: 'crystalpay',
            status: 'completed',
            externalId: String(id),
            description: `Пополнение через CrystalPay`,
            type: 'topup',
            completedAt: new Date(),
          },
        })
      }

      // Проверяем реферальный бонус (10% от пополнения)
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { referredBy: true },
      })

      if (user?.referredBy) {
        const referralBonus = paymentAmount * 0.1
        
        // Начисляем бонус рефереру
        await tx.profile.update({
          where: { userId: user.referredBy },
          data: { balance: { increment: referralBonus } },
        })

        // Обновляем earnings в Referral
        await tx.referral.updateMany({
          where: {
            referrerId: user.referredBy,
            referredId: userId,
          },
          data: {
            earnings: { increment: referralBonus },
          },
        })

        // Создаем транзакцию для реферера
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

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Webhook Error:', error)
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 })
  }
}

function extractUserIdFromExtra(extra: any): string | null {
  try {
    if (!extra) return null

    // Если extra это строка вида "userId:123"
    if (typeof extra === 'string') {
      const match = extra.match(/userId:([a-zA-Z0-9_-]+)/)
      if (match) return match[1]

      // Попробуем распарсить как JSON
      try {
        const parsed = JSON.parse(extra)
        return parsed?.userId || null
      } catch {
        return null
      }
    }

    // Если extra это объект
    if (typeof extra === 'object') {
      return extra?.userId || null
    }

    return null
  } catch {
    return null
  }
}