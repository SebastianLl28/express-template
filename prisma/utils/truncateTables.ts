import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (): Promise<void> => {
  try {
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0;')

    const databaseNameResult = await prisma.$queryRaw<Array<{ 'DATABASE()': string }>>`SELECT DATABASE()`
    const databaseName = databaseNameResult[0]['DATABASE()']

    if (typeof databaseName !== 'string' || databaseName.trim() === '') {
      throw new Error('No se pudo obtener el nombre de la base de datos.')
    }

    const tables = await prisma.$queryRaw<Array<{ TABLE_NAME: string }>>`
      SELECT TABLE_NAME
      FROM information_schema.tables
      WHERE table_schema = ${databaseName};
    `.then(result => result.map((row) => row.TABLE_NAME))

    for (const table of tables) {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE \`${table}\`;`)
    }

    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1;')
  } catch (error) {
    console.error(error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
