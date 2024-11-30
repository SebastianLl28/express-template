import { PrismaClient } from '@prisma/client'
import { main } from './prisma/seed'
import truncateTables from './prisma/utils/truncateTables'

const prisma = new PrismaClient()
beforeEach(async () => {
  await prisma.$connect()
  await main()
})

afterAll(async () => {
  await truncateTables()
  await prisma.$disconnect()
})
