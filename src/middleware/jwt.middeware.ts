import { Response, NextFunction, Request } from 'express'
import { verifyToken } from '../lib/jwt'
import { findUserById } from '../service/user.service'

export const jwtValidator = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authorizationHeader = req.header('Authorization') as string

    // Check if token is present
    if (authorizationHeader === null) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    // Check if token is valid
    if (!authorizationHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    const token = authorizationHeader.replace('Bearer ', '').trim()

    const { id } = verifyToken(token)
    const findUser = await findUserById(id)

    // Check if user exists
    if (findUser === null) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    req.body.user = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
      address: findUser.address,
      status: findUser.status
    }
    next()
  } catch (error) {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
}
