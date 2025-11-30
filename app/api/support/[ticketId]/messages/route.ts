import { NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth-utils'
import { db } from '@/lib/db'

// POST /api/support/[ticketId]/messages - отправить сообщение в тикет
export async function POST(
  request: Request,
  { params }: { params: { ticketId: string } }
) {
  try {
    const authUser = await getAuthUser()
    if (!authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { message } = await request.json()
    const ticketId = params.ticketId

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Проверить, что тикет принадлежит пользователю
    const ticket = await db.supportTicket.findFirst({
      where: {
        id: ticketId,
        userId: authUser.userId
      }
    })

    if (!ticket) {
      return NextResponse.json({ error: 'Ticket not found' }, { status: 404 })
    }

    // Создать сообщение
    const newMessage = await db.supportMessage.create({
      data: {
        ticketId,
        userId: authUser.userId,
        content: message,
        isFromAdmin: false
      },
      include: {
        user: {
          select: { name: true, email: true }
        }
      }
    })

    // Обновить время последнего обновления тикета
    await db.supportTicket.update({
      where: { id: ticketId },
      data: { updatedAt: new Date() }
    })

    return NextResponse.json(newMessage)
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
