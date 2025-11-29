import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/jwt' // Исправлено: импорт из jwt

export async function GET(request: NextRequest) {
  try {
    // Получаем userId из сессии/токена
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value // Или как у вас называется cookie
    
    if (!token) {
      return NextResponse.json({ 
        error: 'Unauthorized' 
      }, { status: 401 })
    }

    // Верифицируем токен и получаем userId
    const decoded = await verifyToken(token)
    const userId = decoded?.userId
    
    if (!userId) {
      return NextResponse.json({ 
        error: 'Invalid token' 
      }, { status: 401 })
    }

    const transactions = await prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })

    return NextResponse.json(transactions)
  } catch (err: any) {
    console.error('Transactions error:', err)
    return NextResponse.json({ 
      error: err.message 
    }, { status: 500 })
  }
}