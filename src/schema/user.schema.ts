import z from 'zod'

export const getUserSchema = z.object({
  params: z.object({
    id: z.string()
  })
})

export type TGetUserSchemaParams = z.infer<typeof getUserSchema>[ 'params' ]

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().max(255),
    email: z.string().max(255),
    password: z.string().max(255),
    address: z.string().max(255)
  })
})

export type TCreateUserSchema = z.infer<typeof createUserSchema>[ 'body' ]

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().max(255),
    email: z.string().max(255),
    address: z.string().max(255)
  })
})

export type TUpdateUserSchema = z.infer<typeof updateUserSchema>[ 'body' ]

export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string()
  })
})

export type TDeleteUserSchemaParams = z.infer<typeof deleteUserSchema>[ 'params' ]
