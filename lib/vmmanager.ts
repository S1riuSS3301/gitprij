import { ServerPlan } from '@prisma/client'

// VMmanager API configuration
const VM_URL = process.env.VMMANAGER_URL!
const API_KEY = process.env.VMMANAGER_API_KEY!
const CLUSTER_ID = process.env.VMMANAGER_CLUSTER_ID || '1' // Default cluster

interface VMManagerOS {
  id: string
  name: string
  family: string
}

interface VMManagerVM {
  id: string
  name: string
  ip: string
  password: string
  os: {
    id: string
    name: string
  }
  specs: {
    cpu: number
    ram: number
    storage: number
  }
  status: string
}

// Helper function to make API calls
async function vmApiCall(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body?: any) {
  const url = `${VM_URL}${endpoint}`

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}` // Assuming Bearer token, adjust if different
  }

  const options: RequestInit = {
    method,
    headers
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`VMmanager API error: ${response.status} ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('VMmanager API call failed:', error)
    throw error
  }
}

// Get available OS
export async function getAvailableOS(): Promise<VMManagerOS[]> {
  const data = await vmApiCall('/vm/v3/os')
  return data.map((os: any) => ({
    id: os.id,
    name: os.name,
    family: os.family || 'linux'
  }))
}

// Create server in VMmanager
export async function createServerInVMmanager({
  plan,
  osId,
  userId,
  installPython,
  pythonVersion,
  installGoogleSDK
}: {
  plan: ServerPlan
  osId: string
  userId: string
  installPython?: boolean
  pythonVersion?: string
  installGoogleSDK?: boolean
}): Promise<{
  success: boolean
  vmId: string
  serverName: string
  ip: string
  password: string
  os: string
  specs: { cpu: number; ram: number; storage: number }
}> {
  const serverName = `vds-${userId}-${Date.now()}`

  // Generate secure password
  const password = generateSecurePassword()

  // Prepare post-install script if needed
  let postInstallScript = ''
  if (installPython) {
    postInstallScript += `curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -\n`
    postInstallScript += `sudo apt-get install -y nodejs npm\n`
    if (pythonVersion) {
      postInstallScript += `sudo apt-get install -y python${pythonVersion} python${pythonVersion}-pip\n`
    } else {
      postInstallScript += `sudo apt-get install -y python3 python3-pip\n`
    }
  }

  if (installGoogleSDK) {
    postInstallScript += `curl -fsSL https://sdk.cloud.google.com | bash\n`
    postInstallScript += `exec -l $SHELL\n`
  }

  const createData = {
    name: serverName,
    os_id: osId,
    cpu: plan.cpu,
    ram: plan.ram * 1024, // Convert GB to MB
    storage: plan.storage * 1024, // Convert GB to MB
    password: password,
    post_install_script: postInstallScript || undefined
  }

  const data = await vmApiCall(`/vm/v3/cluster/${CLUSTER_ID}/vm`, 'POST', createData)

  // Assuming response contains vm details
  return {
    success: true,
    vmId: data.id,
    serverName: data.name,
    ip: data.ip || 'Pending', // IP might be assigned later
    password,
    os: osId,
    specs: {
      cpu: plan.cpu,
      ram: plan.ram,
      storage: plan.storage
    }
  }
}

// Reboot server
export async function rebootServer(vmId: string): Promise<{ success: boolean }> {
  await vmApiCall(`/vm/v3/vm/${vmId}/action`, 'POST', { action: 'reboot' })
  return { success: true }
}

// Power off server
export async function powerOffServer(vmId: string): Promise<{ success: boolean }> {
  await vmApiCall(`/vm/v3/vm/${vmId}/action`, 'POST', { action: 'poweroff' })
  return { success: true }
}

// Change server password
export async function changeServerPassword(vmId: string, newPassword: string): Promise<{ success: boolean }> {
  await vmApiCall(`/vm/v3/vm/${vmId}`, 'PUT', { password: newPassword })
  return { success: true }
}

// Change server OS
export async function changeServerOS(vmId: string, osId: string): Promise<{ success: boolean }> {
  await vmApiCall(`/vm/v3/vm/${vmId}`, 'PUT', { os_id: osId })
  return { success: true }
}

// Get server status
export async function getServerStatus(vmId: string): Promise<string> {
  const data = await vmApiCall(`/vm/v3/vm/${vmId}`)
  return data.status
}

// Generate secure password
function generateSecurePassword(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let password = ''
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}
