import { NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth-utils'
import { db } from '@/lib/db'
import { resend } from '@/lib/resend'
import { getAvailableOS as getVMOS, createServerInVMmanager, rebootServer as rebootVMServer, powerOffServer as powerOffVMServer, changeServerPassword as changeVMPassword, changeServerOS as changeVMOS } from '@/lib/vmmanager'

export async function GET(request: Request) {
  const auth = await getAuthUser()
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const action = searchParams.get("action")

  if (action === "servers") {
    // Get user's servers
    const servers = await db.order.findMany({
      where: { userId: auth.userId, status: "active" },
      include: { serverPlan: true }
    })
    return NextResponse.json(servers)
  }

  if (action === "os") {
    // Get available OS from VMmanager
    try {
      const osList = await getVMOS()
      return NextResponse.json(osList)
    } catch (error) {
      console.error('Failed to get OS list:', error)
      return NextResponse.json({ error: "Failed to get OS list" }, { status: 500 })
    }
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}

export async function POST(request: Request) {
  const auth = await getAuthUser()
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { action, orderId, osId, installPython, pythonVersion, installGoogleSDK } = await request.json()

  if (action === "create_server") {
    // Auto-create server after payment
    const order = await db.order.findUnique({
      where: { id: orderId, userId: auth.userId },
      include: { serverPlan: true }
    })

    if (!order || order.status !== "active") {
      return NextResponse.json({ error: "Order not found or not active" }, { status: 404 })
    }

    // Call VMmanager API to create server
    const serverResult = await createServerInVMmanager({
      plan: order.serverPlan,
      osId,
      userId: auth.userId,
      installPython,
      pythonVersion,
      installGoogleSDK
    })

    if (serverResult.success) {
      // Update order with server details
      await db.order.update({
        where: { id: orderId },
        data: {
          serverName: serverResult.serverName,
          vmId: serverResult.vmId,
          ip: serverResult.ip,
          password: serverResult.password,
          os: serverResult.os
        }
      })

      // Send email to user with server details
      const user = await db.user.findUnique({ where: { id: auth.userId }, select: { email: true, name: true } })
      if (user?.email) {
        try {
          await resend.emails.send({
            from: "noreply@vds-hub.com",
            to: user.email,
            subject: "Your VDS Server is Ready!",
            html: `
              <h1>Server Created Successfully!</h1>
              <p>Dear ${user.name || 'User'},</p>
              <p>Your VDS server has been created and is ready to use.</p>
              <h2>Server Details:</h2>
              <ul>
                <li><strong>IP Address:</strong> ${serverResult.ip}</li>
                <li><strong>Password:</strong> ${serverResult.password}</li>
                <li><strong>OS:</strong> ${serverResult.os}</li>
                <li><strong>CPU:</strong> ${serverResult.specs.cpu} cores</li>
                <li><strong>RAM:</strong> ${serverResult.specs.ram} GB</li>
                <li><strong>Storage:</strong> ${serverResult.specs.storage} GB</li>
              </ul>
              <p>Please save these credentials securely. You can change the password later.</p>
              <br>
              <p>Best regards,<br>VDS Hub Team</p>
            `
          })
        } catch (emailError) {
          console.error("Failed to send server email:", emailError)
        }
      }

      return NextResponse.json({ success: true, server: serverResult })
    } else {
      return NextResponse.json({ error: "Failed to create server" }, { status: 500 })
    }
  }

  if (action === "reboot") {
    const order = await db.order.findUnique({
      where: { id: orderId, userId: auth.userId }
    })
    if (!order || !order.vmId) {
      return NextResponse.json({ error: "Server not found or not created yet" }, { status: 404 })
    }
    try {
      const result = await rebootVMServer(order.vmId)
      return NextResponse.json(result)
    } catch (error) {
      console.error('Reboot failed:', error)
      return NextResponse.json({ error: "Failed to reboot server" }, { status: 500 })
    }
  }

  if (action === "power_off") {
    const order = await db.order.findUnique({
      where: { id: orderId, userId: auth.userId }
    })
    if (!order || !order.vmId) {
      return NextResponse.json({ error: "Server not found or not created yet" }, { status: 404 })
    }
    try {
      const result = await powerOffVMServer(order.vmId)
      return NextResponse.json(result)
    } catch (error) {
      console.error('Power off failed:', error)
      return NextResponse.json({ error: "Failed to power off server" }, { status: 500 })
    }
  }

  if (action === "change_password") {
    const { newPassword } = await request.json()
    const order = await db.order.findUnique({
      where: { id: orderId, userId: auth.userId }
    })
    if (!order || !order.vmId) {
      return NextResponse.json({ error: "Server not found or not created yet" }, { status: 404 })
    }
    try {
      const result = await changeVMPassword(order.vmId, newPassword)
      // Update password in database too
      await db.order.update({
        where: { id: orderId },
        data: { password: newPassword }
      })
      return NextResponse.json(result)
    } catch (error) {
      console.error('Change password failed:', error)
      return NextResponse.json({ error: "Failed to change password" }, { status: 500 })
    }
  }

  if (action === "change_os") {
    const order = await db.order.findUnique({
      where: { id: orderId, userId: auth.userId }
    })
    if (!order || !order.vmId) {
      return NextResponse.json({ error: "Server not found or not created yet" }, { status: 404 })
    }
    try {
      const result = await changeVMOS(order.vmId, osId)
      // Update OS in database
      await db.order.update({
        where: { id: orderId },
        data: { os: osId }
      })
      return NextResponse.json(result)
    } catch (error) {
      console.error('Change OS failed:', error)
      return NextResponse.json({ error: "Failed to change OS" }, { status: 500 })
    }
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}
