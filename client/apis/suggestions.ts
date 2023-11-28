import request from 'superagent'

import { Suggestion } from '../../models/ClientSuggestion'

const baseUrl = 'api/v1/suggestions'

export async function getSuggestions(city: string) {
  const res = await request
    .get(`${baseUrl}/search?city=${city}`)
    .set('Content-Type', 'application/json')
  return res.body as Suggestion[]
}

//
export async function userInput() {
  const res = await request
    .post(baseUrl)
    .set('Content-Type', 'application/json')
}
