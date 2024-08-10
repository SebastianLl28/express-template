import request from 'supertest'
import app from '@src/app'
import { loginRequest } from './fixture/auth.fixture'
import { getUserResponse, getUsersResponse, postUserRequest, putUserRequest } from './fixture/user.fixture'
import { findUserByEmail } from '@src/service/user.service'
import { authAPI, userAPI } from './consts'

describe('User', () => {
  let token: string

  beforeEach(async () => {
    const res = await request(app).post(`${authAPI}/login`).send(loginRequest)
    token = res.body.token as string
  })

  test('GET users', async () => {
    const response = await request(app).get(userAPI).set('Authorization', `Bearer ${token}`)
    expect(200).toEqual(response.status)
    expect(response.body).toEqual(getUsersResponse)
  })

  test('GET user', async () => {
    const response = await request(app).get(`${userAPI}/1`).set('Authorization', `Bearer ${token}`)
    expect(200).toEqual(response.status)
    expect(response.body).toEqual(getUserResponse)
  })

  test('POST user', async () => {
    const response = await request(app).post(userAPI).send(postUserRequest).set('Authorization', `Bearer ${token}`)
    const findUser = await findUserByEmail(postUserRequest.email)
    expect(response.status).toEqual(201)
    expect(findUser).not.toBeNull()
  })

  test('PUT user', async () => {
    const response = await request(app).put(userAPI).send(putUserRequest).set('Authorization', `Bearer ${token}`)
    const findUser = await findUserByEmail(putUserRequest.email)
    expect(response.status).toEqual(200)
    expect(findUser).not.toBeNull()
  })

  test('DELETE user', async () => {
    const response = await request(app).delete(`${userAPI}/2`).set('Authorization', `Bearer ${token}`)
    const findUser = await request(app).get(`${userAPI}/2`).set('Authorization', `Bearer ${token}`)
    expect(response.status).toEqual(200)
    expect(findUser.status).toEqual(404)
  })
})
