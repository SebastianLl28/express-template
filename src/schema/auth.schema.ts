import z from 'zod'

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string()
  })
})

export type TLoginSchema = z.infer<typeof loginSchema>[ 'body' ]

export const updatePasswordSchema = z.object({
  body: z.object({
    password: z.string(),
    newPassword: z.string(),
    confirmNewPassword: z.string()
  })
})

export type TUpdatePasswordSchema = z.infer<typeof updatePasswordSchema>[ 'body' ]
