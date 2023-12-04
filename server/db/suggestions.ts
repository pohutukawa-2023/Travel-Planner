import { Suggestion } from '../../models/suggestion.ts'
import connection from './connection.ts'

export async function getSuggestions(
  city: string,
  db = connection
): Promise<Suggestion[]> {
  return await db('suggestions').where('city_name', city).select()
}
