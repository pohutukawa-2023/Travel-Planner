import request from 'superagent'
import { AddTravelDetails, TravelDetails } from '../../models/ClientSuggestion'

const baseUrl = '/api/v1/travelDetail'

//Get travel details
export async function getTravelDetails(token: string) {
  const res = await request
    .get(`${baseUrl}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as TravelDetails[]
}

//Post travel deatails
export async function addTravelDetails(
  token: string,
  addTripDetail: AddTravelDetails
) {
  await request
    .post(`${baseUrl}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(addTripDetail)
}
