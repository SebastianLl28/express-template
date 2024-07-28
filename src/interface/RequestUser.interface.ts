import { user } from '@prisma/client'

export interface IRequestUser extends Request {
  user: Omit<user, 'password'>
}
