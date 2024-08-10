import { PrismaClient } from '@prisma/client'
import { main } from './prisma/seed'

const prisma = new PrismaClient()
beforeEach(async () => {
  await prisma.$connect()
  await main()
})

afterAll(async () => {
  await prisma.$disconnect()
})
