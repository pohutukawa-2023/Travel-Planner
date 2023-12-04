import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { addItinerary } from './itinerary'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('addItinerary', () => {
  it('should add 1 row into itinerary', async () => {
    const response = await addItinerary({
      detail_id: 2,
      suggestion_id: 4,
    })
    expect(response).toHaveLength(1)
  })
})
