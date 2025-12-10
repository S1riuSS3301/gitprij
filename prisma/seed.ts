import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create server plans
  const ddr5Plans = [
    { name: '2 vCore DDR5', nameRu: '2 ядра DDR5', cpu: 2, ram: 2, storage: 35, bandwidth: 1000, price: 6, popular: false },
    { name: '2 vCore DDR5', nameRu: '2 ядра DDR5', cpu: 2, ram: 4, storage: 55, bandwidth: 1000, price: 10, popular: false },
    { name: '4 vCore DDR5', nameRu: '4 ядра DDR5', cpu: 4, ram: 6, storage: 85, bandwidth: 1000, price: 18, popular: false },
    { name: '4 vCore DDR5', nameRu: '4 ядра DDR5', cpu: 4, ram: 8, storage: 115, bandwidth: 1000, price: 23, popular: false },
    { name: '5 vCore DDR5', nameRu: '5 ядер DDR5', cpu: 5, ram: 10, storage: 155, bandwidth: 1000, price: 29, popular: false },
    { name: '6 vCore DDR5', nameRu: '6 ядер DDR5', cpu: 6, ram: 12, storage: 185, bandwidth: 1000, price: 35, popular: false },
    { name: '8 vCore DDR5', nameRu: '8 ядер DDR5', cpu: 8, ram: 16, storage: 275, bandwidth: 1000, price: 49, popular: false },
    { name: '10 vCore DDR5', nameRu: '10 ядер DDR5', cpu: 10, ram: 20, storage: 325, bandwidth: 1000, price: 60, popular: false },
  ]

  const ddr4Plans = [
    { name: '2 vCore DDR4', nameRu: '2 ядра DDR4', cpu: 2, ram: 2, storage: 35, bandwidth: 1000, price: 4, popular: false },
    { name: '2 vCore DDR4', nameRu: '2 ядра DDR4', cpu: 2, ram: 4, storage: 55, bandwidth: 1000, price: 6, popular: false },
    { name: '3 vCore DDR4', nameRu: '3 ядра DDR4', cpu: 3, ram: 4, storage: 65, bandwidth: 1000, price: 8, popular: false },
    { name: '4 vCore DDR4', nameRu: '4 ядра DDR4', cpu: 4, ram: 6, storage: 85, bandwidth: 1000, price: 11, popular: false },
    { name: '4 vCore DDR4', nameRu: '4 ядра DDR4', cpu: 4, ram: 8, storage: 115, bandwidth: 1000, price: 15, popular: false },
    { name: '5 vCore DDR4', nameRu: '5 ядер DDR4', cpu: 5, ram: 10, storage: 140, bandwidth: 1000, price: 18, popular: false },
    { name: '6 vCore DDR4', nameRu: '6 ядер DDR4', cpu: 6, ram: 12, storage: 160, bandwidth: 1000, price: 22, popular: false },
    { name: '8 vCore DDR4', nameRu: '8 ядер DDR4', cpu: 8, ram: 16, storage: 200, bandwidth: 1000, price: 26, popular: false },
  ]

  const allPlans = [...ddr5Plans, ...ddr4Plans]

  for (const plan of allPlans) {
    const exists = await prisma.serverPlan.findFirst({
      where: { name: plan.name, cpu: plan.cpu, ram: plan.ram }
    })
    if (!exists) {
      await prisma.serverPlan.create({ data: plan })
    }
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@vds-hub.com' },
    update: {},
    create: {
      email: 'admin@vds-hub.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  })

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
