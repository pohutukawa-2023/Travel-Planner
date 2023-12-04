import request from 'superagent'
import { TravelDetails, newTrip } from '../../models/ClientSuggestion'

const detailUrl = '/api/v1/travelDetail'

//get tripDetails
export async function getTripDetails(token: string): Promise<TravelDetails[]> {
  const response = await request
    .get(detailUrl)
    .set('Authorization', `Bearer ${token}`)
  return response.body as TravelDetails[]
}

//post
export async function addTrip(newTrip: newTrip, token: string) {
  await request
    .post(detailUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newTrip)
}
