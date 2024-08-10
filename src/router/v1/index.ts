import userRouter from './user.router'
import authRouter from './auth.router'
import express from 'express'

const routing = express()

const API_V1 = '/api/v1'

routing.use(`${API_V1}/user`, userRouter)
routing.use(`${API_V1}/auth`, authRouter)
export default routing
