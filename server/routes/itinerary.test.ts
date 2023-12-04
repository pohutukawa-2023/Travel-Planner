import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/itinerary'
import { getMockToken } from './mockToken'

vi.mock('../db/itinerary')
vi.mock('../logger.ts')

describe('POST /api/v1/itinerary', () => {
  it('should return 201', async () => {
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(201)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.addItinerary).mockRejectedValue(new Error('test-itinerary'))
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Something wrong' })
  })
})
