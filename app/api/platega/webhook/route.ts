import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id, status, amount, currency, metadata } = body

    if (status === 'completed') {
      const userId = metadata?.userId
      if (!userId) {
        console.error('No userId in webhook metadata')
        return NextResponse.json({ error: 'No userId' }, { status: 400 })
      }

      await prisma.$transaction(async (tx: any) => {
        const transaction = await tx.transaction.updateMany({
          where: {
            externalId: id,
            method: 'platega',
            status: 'pending',
          },
          data: {
            status: 'completed',
            completedAt: new Date(),
          },
        })

        if (transaction.count === 0) {
          console.log('Transaction already processed or not found')
          return
        }

        // +BALANCE with 0% commission for fiat
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

    return NextResponse.json({ success: true })

  } catch (err: any) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
