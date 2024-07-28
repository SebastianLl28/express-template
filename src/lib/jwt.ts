import { user } from '@prisma/client'
import jwt from 'jsonwebtoken'

export const signToken = (payload: Omit<user, 'password'>): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '3h' })
}

export const verifyToken = (token: string): Omit<user, 'password'> => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as Omit<user, 'password'>
}
