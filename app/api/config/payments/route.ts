import { NextResponse } from "next/server"

export async function GET() {
  // Серверная сторона: читаем ENV, .env.local подхватывается рантаймом Next
  const authLogin = process.env.AUTH_LOGIN
  const authSecret = process.env.AUTH_SECRET
  const redirectUrl = process.env.REDIRECT_URL || "http://localhost:3000/dashboard/billing"

  const crystalpayEnabled = Boolean(authLogin && authSecret)

  return NextResponse.json({
    crystalpayEnabled,
    redirectUrl,
  })
}


