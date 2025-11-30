import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { token } = await request.json()

  if (!token) {
    return NextResponse.json({ error: "Token required" }, { status: 400 })
  }

  const secret = process.env.TURNSTILE_SECRET_KEY!

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token
    })
  })

  const data = await res.json()

  if (data.success) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 })
  }
}
