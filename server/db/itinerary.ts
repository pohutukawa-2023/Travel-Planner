import connection from './connection.ts'

interface NewItinerary {
  detail_id: number
  suggestion_id: number
}

export async function addItinerary(newItinerary: NewItinerary, db = connection) {
  return await db('itinerary').insert(newItinerary)
}