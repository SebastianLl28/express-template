import { Request, Response } from 'express'
import { createUser, deleteUserById, findAllUsers, findUserByEmail, findUserById, updateUserById } from '../service/user.service'
import { TCreateUserSchema, TDeleteUserSchemaParams, TGetUserSchemaParams, TUpdateUserSchema } from '../schema/user.schema'
import { IRequestUser } from '@src/interface/RequestUser.interface'

const getUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const users = await findAllUsers()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getUserById = async (req: Request<TGetUserSchemaParams, unknown, unknown>, res: Response): Promise<Response> => {
  try {
    const { id } = req.params
    const user = await findUserById(Number(id))
    if (user === null) {
      return res.status(404).json({ error: 'User not found' })
    }
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const postUser = async (req: Request<unknown, unknown, TCreateUserSchema>, res: Response): Promise<Response> => {
  try {
    const { email, address, name, password } = req.body
    const findUser = await findUserByEmail(email)
    if (findUser !== null) {
      return res.status(400).json({ error: 'Email already exists' })
    }
    const user = await createUser({ email, address, name, password })
    return res.status(201).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

interface IRequestUpdate extends TUpdateUserSchema, IRequestUser {}
const putUser = async (req: Request<unknown, unknown, IRequestUpdate>, res: Response): Promise<Response> => {
  try {
    const { user, email, name, address } = req.body
    await updateUserById(user.id, { email, name, address })
    return res.status(200).json({ message: 'User updated' })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const deleteUser = async (req: Request<TDeleteUserSchemaParams, unknown, unknown>, res: Response): Promise<Response> => {
  try {
    const { id } = req.params
    await deleteUserById(Number(id))
    return res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export { getUsers, getUserById, postUser, putUser, deleteUser }
