import express from 'express'
import swaggerUI from 'swagger-ui-express'

import { authRouter, userRouter } from './router'
import morgan from 'morgan'
import { swaggerDocs } from './config/swagger'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.disable('x-powered-by')

app.get('/healthCheck', (req, res) => {
  res.status(200).json({ message: 'Server is running' })
})
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use('/user', userRouter)
app.use('/auth', authRouter)

export default app
