import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'  // Для будущих проверок

export async function POST(request: Request) {
  try {
    const { id } = await request.json()  // 🔥 ТОЛЬКО { id: "123" }

    if (!id) {
      return NextResponse.json({ 
        success: false,
        error: '❌ Требуется { id: "invoice_id" }'
      }, { status: 400 })
    }

    const auth_login = process.env.AUTH_LOGIN
    const auth_secret = process.env.AUTH_SECRET
    if (!auth_login || !auth_secret) {
      return NextResponse.json({ 
        success: false, 
        error: '❌ Нет credentials' 
      }, { status: 500 })
    }

    // 🔥 API STATUS CHECK (используем v1/invoice/info для совместимости)
    const apiUrl = 'https://api.crystalpay.io/v1/invoice/info'
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_login,
        auth_secret,
        id  // String или Number — API примет
      }),
    })

    const data = await res.json()

    if (!res.ok || data.error) {
      const msg = data.errors?.join(', ') || data.error || 'API Error'
      return NextResponse.json({ 
        success: false, 
        error: `❌ ${msg}` 
      }, { status: 400 })
    }

    // 🔥 ПАРСИМ userId ИЗ EXTRA (поддерживаем и строку и JSON)
    const userId = extractUserIdFromExtra(data.extra)

    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: '❌ userId не найден' 
      }, { status: 400 })
    }

    const paid = data.state === 'payed'  // По докам: payed

    // 🔥 AUTO CREDIT если paid + pending в DB (idempotent)
    if (paid) {
      const tx = await prisma.transaction.findFirst({
        where: { 
          externalId: String(id),
          method: 'crystalpay'
        }
      })

      // Если транзакция существует и еще не обработана - зачисляем
      if (tx && tx.status === 'pending') {
        const amount = Number(data.amount)
        
        // ✅ UPDATE BALANCE + REFERRAL BONUS
        await prisma.$transaction(async (prismaTx) => {
          // Обновляем баланс пользователя
          await prismaTx.profile.update({
            where: { userId },
            data: { balance: { increment: amount } },
          })
          
          // Обновляем статус транзакции
          await prismaTx.transaction.update({
            where: { id: tx.id },
            data: {
              status: 'completed',
              completedAt: new Date()
            }
          })

          // Реферальный бонус (10%)
          const user = await prismaTx.user.findUnique({
            where: { id: userId },
            select: { referredBy: true },
          })

          if (user?.referredBy) {
            const referralBonus = amount * 0.1
            
            // Начисляем бонус рефереру
            await prismaTx.profile.update({
              where: { userId: user.referredBy },
              data: { balance: { increment: referralBonus } },
            })

            // Обновляем earnings в Referral
            await prismaTx.referral.updateMany({
              where: {
                referrerId: user.referredBy,
                referredId: userId,
              },
              data: {
                earnings: { increment: referralBonus },
              },
            })

            // Создаем транзакцию для реферера
            await prismaTx.transaction.create({
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
      // Если транзакция уже completed - просто возвращаем успех (idempotent)
    }

    // 🎉 FULL RESPONSE
    return NextResponse.json({
      success: true,
      paid,  // true/false
      status: data.state,  // payed/pending/expired
      amount: data.amount,
      currency: data.currency,
      userId,  // Для frontend
      expiresAt: data.expires,  // Если есть
      fullData: data,  // Всё
      message: paid ? '✅ ОПЛАЧЕНО! Баланс пополнен' : '⏳ Ожидаем оплату...'
    }, { status: 200 })

  } catch (err: any) {
    return NextResponse.json({ 
      success: false, 
      error: `💥 ${err.message}` 
    }, { status: 500 })
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