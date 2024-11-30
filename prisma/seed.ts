import { PrismaClient } from '@prisma/client'
import createUser from './data/userSetupData'
import truncateTables from './utils/truncateTables'
const prisma = new PrismaClient()

export const main = async (): Promise<void> => {
  await truncateTables()
  await createUser()
}

if (require.main === module) {
  main().then(async () => {
    await prisma.$disconnect()
    console.log('Seed data created')
    process.exit(0)
  }).catch(async (err) => {
    await prisma.$disconnect()
    console.error(err)
    process.exit(1)
  })
}
