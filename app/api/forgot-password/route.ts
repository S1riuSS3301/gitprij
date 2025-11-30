import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { resend } from "@/lib/resend"
import crypto from "crypto"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 })
  }

  const user = await db.user.findUnique({ where: { email } })

  if (!user) {
    // Don't reveal if email exists
    return NextResponse.json({ success: true })
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString("hex")
  const resetExpires = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

  await db.user.update({
    where: { id: user.id },
    data: { resetToken, resetExpires }
  })

  // Send email
  const resetUrl = `${process.env.BASE_URL}/reset-password?token=${resetToken}`

  try {
    await resend.emails.send({
      from: "noreply@vds-hub.com",
      to: user.email,
      subject: "Password Reset - VDS Hub",
      html: `
        <h1>Password Reset Request</h1>
        <p>You requested a password reset for your VDS Hub account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 10 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
        <br>
        <p>Best regards,<br>VDS Hub Team</p>
      `
    })
  } catch (error) {
    console.error("Failed to send reset email:", error)
  }

  return NextResponse.json({ success: true })
}
