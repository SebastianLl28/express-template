import { hash, compare } from 'bcrypt'

export const hashPassword = async (password: string): Promise<string> => await hash(password, 10)

export const comparePassword = async (password: string, hash: string): Promise<boolean> => await compare(password, hash)
