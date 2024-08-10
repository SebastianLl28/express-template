import { PrismaClient, user } from '@prisma/client'
import { hash } from 'bcrypt'
const prisma = new PrismaClient()

export const main = async (): Promise<void> => {
  await prisma.user.deleteMany({})
  const users = await createUsersList()
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

const createUsersList = async (): Promise<user[]> => [{
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
