import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, userId } = body

    if (!amount || !userId) {
      return NextResponse.json({ error: 'Missing amount or userId' }, { status: 400 })
    }

    const our_payment_id = uuidv4()

    await prisma.transaction.create({
      data: {
        userId,
        externalId: our_payment_id,
        amount: Number(amount),
        status: 'pending',
        method: 'lzt',
        createdAt: new Date(),
      },
    })

    const additional_data = JSON.stringify({
      userId,
      payment_id: our_payment_id,
    })

    const response = await fetch('https://api.lzt.market/invoice', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LZT_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        amount: Number(amount),
        payment_id: our_payment_id,
        comment: `Payment for user ${userId} - Amount: ${amount} USD`,
        url_success: process.env.LZT_SUCCESS_URL || 'https://your-site.com/success',
        url_callback: process.env.LZT_CALLBACK_URL || 'https://your-site.com/api/lzt-webhook',
        lifetime: 3600,
        merchant_id: process.env.LZT_MERCHANT_ID ? Number(process.env.LZT_MERCHANT_ID) : undefined,
        additional_data,
        is_test: false,
      }),
    })

    if (!response.ok) {
      let errorData: any = {}
      try {
        errorData = await response.json()
      } catch {
        errorData = { message: 'Unknown error from LZT' }
      }
      console.error('LZT Create Invoice Error:', errorData)
      return NextResponse.json(
        { error: 'Failed to create invoice', details: errorData },
        { status: 500 }
      )
    }

    const invoiceData = await response.json()
    return NextResponse.json({
      ok: true,
      url: invoiceData.url,
      id: invoiceData.invoice_id,
    })
  } catch (error) {
    console.error('Create Payment Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}