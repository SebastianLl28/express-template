import { Prisma, user } from '@prisma/client'
import { hashPassword, comparePassword, prismaClient } from '../lib'

const findAllUsers = async (): Promise<Array<Omit<user, 'password'>>> => {
  return await prismaClient.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      address: true,
      status: true
    }
  })
}

const findUserById = async (id: number): Promise<Omit<user, 'password'> | null> => {
  return await prismaClient.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      address: true,
      status: true
    }
  })
}

const createUser = async (data: Prisma.userUncheckedCreateInput): Promise<user> => {
  data.password = await hashPassword(data.password)
  return await prismaClient.user.create({
    data
  })
}

const updateUserById = async (id: number, data: Omit<user, 'id' | 'password' | 'status'>): Promise<user> => {
  return await prismaClient.user.update({
    where: {
      id
    },
    data
  })
}

const deleteUserById = async (id: number): Promise<user> => {
  return await prismaClient.user.delete({
    where: {
      id
    }
  })
}

const findUserByEmail = async (email: string): Promise<user | null> => {
  return await prismaClient.user.findUnique({
    where: {
      email
    }
  })
}

const updatePasswordById = async (id: number, newPassword: string, oldPassword: string): Promise<user> => {
  const findUser = await prismaClient.user.findUnique({
    where: {
      id
    }
  })
  if (findUser === null) {
    throw new Error('User not found')
  }
  const compare = await comparePassword(oldPassword, findUser.password)
  if (!compare) {
    throw new Error('error updating password')
  }
  const password = await hashPassword(newPassword)
  return await prismaClient.user.update({
    where: {
      id
    },
    data: {
      password
    }
  })
}

export { findAllUsers, findUserById, createUser, updateUserById, deleteUserById, findUserByEmail, updatePasswordById }
