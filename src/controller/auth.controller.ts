import { Request, Response } from 'express'
import { IRequestUser } from '@src/interface/RequestUser.interface'
import { TLoginSchema, TUpdatePasswordSchema } from '../schema/auth.schema'
import { findUserByEmail, updatePasswordById } from '../service/user.service'
import { signToken } from '../lib/jwt'
import { comparePassword } from '../lib'

export const postLogin = async (req: Request<unknown, unknown, TLoginSchema>, res: Response): Promise<Response> => {
  const { email, password } = req.body
  const user = await findUserByEmail(email)
  if (user === null) {
    return res.status(401).json({ error: 'Invalid email or password' })
  }
  const passwordMatch = await comparePassword(password, user.password)
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid email or password' })
  }
  const token = signToken({ id: user.id, email: user.email, address: user.address, name: user.name, status: user.status })
  return res.status(200).json({ token, user: { id: user.id, email: user.email, status: user.status } })
}

export const verifyToken = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: 'Token is valid' })
}

interface IRequestUpdatePassword extends IRequestUser, TUpdatePasswordSchema {}
export const putPassword = async (req: Request<unknown, unknown, IRequestUpdatePassword>, res: Response): Promise<Response> => {
  try {
    const { user, password, confirmNewPassword, newPassword } = req.body
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ error: 'Passwords do not match' })
    }
    await updatePasswordById(user.id, newPassword, password)
    return res.status(200).json({ message: 'Password updated' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'error updating password' })
  }
}
