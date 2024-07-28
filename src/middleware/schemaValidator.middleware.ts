import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const schemaValidator = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    // Si existe la propiedad body en el schema, procesa el body
    const user = req.body.user
    if (schema.shape.body !== undefined) {
      const strippedBodySchema = (schema.shape.body).strip()
      const parsedBody = strippedBodySchema.parse(req.body)
      req.body = { ...parsedBody, user }
    }

    // Procesa params y query si existen en el schema
    schema.shape.params?.parse(req.params)
    schema.shape.query?.parse(req.query)

    next()
  } catch (error) {
    console.log(error)
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          path: issue.path[1],
          message: issue.message
        }))
      )
    }
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default schemaValidator
