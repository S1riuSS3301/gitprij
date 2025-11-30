import { NextResponse } from "next/server"
import { getAuthUser } from "@/lib/auth-utils"
import { db } from "@/lib/db"
import { resend } from "@/lib/resend"

export async function GET() {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const notifications = await db.notification.findMany({
    include: {
      sender: { select: { email: true, name: true } }
    },
    orderBy: { sentAt: "desc" }
  })

  return NextResponse.json(notifications)
}

export async function POST(request: Request) {
  const auth = await getAuthUser()
  if (!auth || auth.role?.toLowerCase() !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { type, subject, message, recipients } = await request.json()

  if (!type || !message) {
    return NextResponse.json({ error: "Type and message required" }, { status: 400 })
  }

  if (type === "email") {
    const emails = recipients || await db.user.findMany({ select: { email: true } }).then(users => users.map(u => u.email))
    await resend.emails.send({
      from: "noreply@vds-hub.com",
      to: emails,
      subject: subject || "Notification from VDS Hub",
      html: message
    })
  } else if (type === "in-app") {
    // TODO: Implement in-app notifications (WebSocket broadcast or database notifications)
  }

  // Log the notification
  await db.notification.create({
    data: {
      type,
      subject,
      message,
      recipients: JSON.stringify(recipients),
      sentBy: auth.userId
    }
  })

  return NextResponse.json({ success: true, message: "Notification sent" })
}
