import request from 'supertest'
import app from '../src/app'

describe('App', () => {
  test('Get Health Check', async () => {
    const res = await request(app).get('/healthCheck')
    expect(200).toEqual(res.status)
  })
})
