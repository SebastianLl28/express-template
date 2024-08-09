import request from 'supertest'
import app from '../src/app'

describe('App', () => {
  test('Get Health Check', async () => {
    const res = await request(app).get('/healthCheck')
    expect(res.status).toEqual(200)
  })
})
