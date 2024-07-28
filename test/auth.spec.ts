import request from 'supertest'
import app from '../src/app'
import { loginRequest } from './fixture/auth.fixture'
import { comparePassword } from '../src/lib/bcrypt'
import { prismaClient } from '../src/lib'

describe('Auth', () => {
  let token: string
  let loginStatus: number

  beforeEach(async () => {
    const res = await request(app).post('/auth/login').send(loginRequest)
    token = res.body.token as string
    loginStatus = res.status
  })

  test('Login', async () => {
    expect(loginStatus).toEqual(200)
  })

  test('Verify Token', async () => {
    const response = await request(app).get('/auth/verify').set('Authorization', `Bearer ${token}`)
    expect(response.status).toEqual(200)
  })

  test('Update Password', async () => {
    const newPassword = '12345'

    const response = await request(app)
      .put('/auth/password')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: '1234',
        newPassword,
        confirmNewPassword: newPassword
      })
    const user = await prismaClient.user.findUnique({
      where: {
        id: 1
      }
    })
    // compare new password with old password
    const compare = await comparePassword(newPassword, user?.password as string)
    expect(compare).toBeTruthy()
    expect(response.status).toEqual(200)
  })
})
