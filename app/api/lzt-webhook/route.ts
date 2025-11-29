import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const secretHeader = request.headers.get('x-secret-key')

    if (process.env.LZT_MERCHANT_SECRET && secretHeader !== process.env.LZT_MERCHANT_SECRET) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
    }

    if (body.status !== 'paid') {
      return NextResponse.json({ ok: true })
    }

    const { amount, additional_data, payment_id: lzt_payment_id, invoice_id } = body

    let extra: Record<string, any> = {}
    try {
      extra = JSON.parse(additional_data || '{}')
    } catch {
      extra = {}
    }
    const userId = extra.userId
    const our_payment_id = extra.payment_id

    if (!userId || !our_payment_id) return NextResponse.json({ ok: true })

    const paymentAmount = Number(amount)

    await prisma.$transaction(async (tx) => {
      // Обновляем баланс пользователя
      await tx.profile.update({ 
        where: { userId }, 
        data: { balance: { increment: paymentAmount } } 
      })

      // Обновляем транзакцию
      await tx.transaction.updateMany({
        where: {
          externalId: our_payment_id,
          status: 'pending',
          method: 'lzt',
        },
        data: { status: 'completed', completedAt: new Date() },
      })

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
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}