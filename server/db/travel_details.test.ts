import { describe, it, expect, beforeAll } from 'vitest'
import db from './connection'
import {
  addTravelDetail,
  getTravelDetails,
  getTravelDetailAndSuggestions,
} from './travel_details'

beforeAll(async () => {
  await db.migrate.latest()
  await db.seed.run()
})

describe('getTravelDetailAndSuggestions', () => {
  it('should return 1 travelDetail and relative suggestions', async () => {
    const response = await getTravelDetailAndSuggestions(1)
    expect(response).toHaveProperty('travelDetail')
    expect(response).toHaveProperty('suggestions')
    expect(response.travelDetail).toHaveProperty('id')
    expect(response.travelDetail).toHaveProperty('user_id')
    expect(response.travelDetail).toHaveProperty('date')
    expect(response.travelDetail).toHaveProperty('city')
    expect(response.suggestions).toHaveLength(3)
    expect(response.suggestions[0]).toHaveProperty('id')
    expect(response.suggestions[0]).toHaveProperty('name')
    expect(response.suggestions[0]).toHaveProperty('city_name')
    expect(response.suggestions[0]).toHaveProperty('category')
    expect(response.suggestions[0]).toHaveProperty('description')
    expect(response.suggestions[0]).toHaveProperty('rating')
    expect(response.suggestions[0]).toHaveProperty('address')
    expect(response.suggestions[0]).toHaveProperty('opening_hours')
    expect(response.suggestions[0]).toHaveProperty('link')
    expect(response.suggestions[0]).toHaveProperty('price_range')
  })
})

describe('getTravelDetails', () => {
  it('should return travelDetails for one user', async () => {
    const response = await getTravelDetails('auth0|6569360d76c1b421367afd49')
    expect(response).toHaveLength(2)
  })
})

describe('addTravelDetail', () => {
  it('should insert travelDetail for user', async () => {
    const response = await addTravelDetail({
      user_id: 'auth0|6569360d76c1b421367afd49',
      date: '2058',
      city: 'Wellington',
    })
    expect(response).toHaveLength(1)
  })
})
