import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/itinerary'
import { getMockToken } from './mockToken'

vi.mock('../db/itinerary')
vi.mock('../logger.ts')

describe('POST /api/v1/itinerary', () => {
  const fakeItinerary = {
    detailId: 1,
    suggestionId: 10,
  }
  
  it('should return 201', async () => {
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeItinerary)
    expect(response.status).toBe(201)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.addItinerary).mockRejectedValue(new Error('test-itinerary'))
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeItinerary)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Something wrong' })
  })

  const fakeItineraryWithoutDetailId = {
    detailId: null,
    suggestionId: 10,
  }

  it('should return 400 when no detailId is passed', async () => {
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeItineraryWithoutDetailId)
    expect(response.status).toBe(400)
  })

  const fakeItineraryWithoutSuggestionId = {
    detailId: 1,
    suggestionId: null,
  }

  it('should return 400 when no suggestionId is passed', async () => {
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeItineraryWithoutSuggestionId)
    expect(response.status).toBe(400)
  })
})
