import app from '../src/app'
import request from 'supertest'
import { loginRequest } from './fixture/auth.fixture'
import { getUserResponse, getUsersResponse, postUserRequest, putUserRequest } from './fixture/user.fixture'
import { findUserByEmail } from '../src/service/user.service'

describe('User', () => {
  let token: string

  beforeEach(async () => {
    const res = await request(app).post('/auth/login').send(loginRequest)
    token = res.body.token as string
  })

  test('GET users', async () => {
    const response = await request(app).get('/user').set('Authorization', `Bearer ${token}`)
    expect(200).toEqual(response.status)
    expect(response.body).toEqual(getUsersResponse)
  })

  test('GET user', async () => {
    const response = await request(app).get('/user/1').set('Authorization', `Bearer ${token}`)
    expect(200).toEqual(response.status)
    expect(response.body).toEqual(getUserResponse)
  })

  test('POST user', async () => {
    const response = await request(app).post('/user').send(postUserRequest).set('Authorization', `Bearer ${token}`)
    const findUser = await findUserByEmail(postUserRequest.email)
    expect(response.status).toEqual(201)
    expect(findUser).not.toBeNull()
  })

  test('PUT user', async () => {
    const response = await request(app).put('/user').send(putUserRequest).set('Authorization', `Bearer ${token}`)
    const findUser = await findUserByEmail(putUserRequest.email)
    expect(response.status).toEqual(200)
    expect(findUser).not.toBeNull()
  })

  test('DELETE user', async () => {
    const response = await request(app).delete('/user/2').set('Authorization', `Bearer ${token}`)
    const findUser = await request(app).get('/user/2').set('Authorization', `Bearer ${token}`)
    console.log(findUser.status)
    expect(response.status).toEqual(200)
    expect(findUser.status).toEqual(404)
  })
})
