import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getSuggestions } from './suggestions'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getSuggestions', () => {
  it('should return suggestions', async () => {
    const suggestions = await getSuggestions('Auckland')
    expect(suggestions).toHaveLength(15)
    expect(suggestions[0]).toHaveProperty('id')
    expect(suggestions[0]).toHaveProperty('name')
    expect(suggestions[0]).toHaveProperty('city_name')
    expect(suggestions[0]).toHaveProperty('category')
    expect(suggestions[0]).toHaveProperty('description')
    expect(suggestions[0]).toHaveProperty('rating')
    expect(suggestions[0]).toHaveProperty('address')
    expect(suggestions[0]).toHaveProperty('opening_hours')
    expect(suggestions[0]).toHaveProperty('link')
    expect(suggestions[0]).toHaveProperty('price_range')
  })
})
