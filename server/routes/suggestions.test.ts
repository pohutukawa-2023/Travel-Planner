import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/suggestions'
import { getMockToken } from './mockToken'

vi.mock('../db/suggestions')
vi.mock('../logger.ts')

describe('GET /api/v1/suggestions/search?city=Auckland', () => {
  it('should return 200 with an array', async () => {
    const fakeSuggestions = [
      {
        id: 1,
        name: 'Auckland Sky Tower',
        city_name: 'Auckland',
        category: 'place',
        description:
          'Auckland Sky Tower offers breathtaking views of the city and harbor.',
        rating: 4.2,
        address: 'Victoria Street West, Auckland, New Zealand',
        opening_hours: '10 AM - 8 PM',
        link: 'https://www.skycityauckland.co.nz/',
        price_range: '',
      },
    ]

    vi.mocked(db.getSuggestions).mockResolvedValue(fakeSuggestions)
    const response = await request(server)
      .get('/api/v1/suggestions/search?city=Auckland')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeSuggestions)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getSuggestions).mockRejectedValue(
      new Error('test-suggestions')
    )
    const response = await request(server)
      .get('/api/v1/suggestions/search?city=Auckland')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Unable to retrieve suggestions' })
  })
})

describe('GET /api/v1/suggestions/search', () => {
  it('should return 400 when no city is passed', async () => {
    vi.mocked(db.getSuggestions).mockRejectedValue(
      new Error('test-suggestions')
    )
    const response = await request(server)
      .get('/api/v1/suggestions/search')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ message: 'Please provide a city' })
  })
})
