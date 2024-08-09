import { PrismaClient, user } from '@prisma/client'
import { createUser } from '../src/service/user.service'
const prisma = new PrismaClient()

export const main = async (): Promise<void> => {
  const users: user[] = [{
    id: 1,
    name: 'Betsaly',
    email: 'betsaly@gmail.com',
    password: '1234',
    address: '1234 Main St',
    status: 'ACTIVE'
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com',
    password: '1234',
    address: '1234 Main St',
    status: 'INACTIVE'
  },
  {
    id: 3,
    name: 'Charlie',
    email: 'charlie@gmail.com',
    password: '1234',
    address: '1234 Main St',
    status: 'UNVERIFIED'
  }]
  for (const user of users) {
    await createUser(user)
  }
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
