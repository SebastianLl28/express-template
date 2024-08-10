import { PrismaClient, user } from '@prisma/client'
import { hash } from 'bcrypt'
const prisma = new PrismaClient()

export const main = async (): Promise<void> => {
  await prisma.user.deleteMany({})
  const createUsers = async (): Promise<user[]> => [{
    id: 1,
    name: 'Betsaly',
    email: 'betsaly@gmail.com',
    password: await hash('1234', 10),
    address: '1234 Main St',
    status: 'ACTIVE'
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com',
    password: await hash('1234', 10),
    address: '1234 Main St',
    status: 'INACTIVE'
  },
  {
    id: 3,
    name: 'Charlie',
    email: 'charlie@gmail.com',
    password: await hash('1234', 10),
    address: '1234 Main St',
    status: 'UNVERIFIED'
  }]
  const users = await createUsers()
  console.log('before create many')
  await prisma.user.createMany({
    data: users
  })
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
