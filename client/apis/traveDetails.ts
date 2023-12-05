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

export async function getTravelDetailWithId(
  travelDetailId: number,
  token: string
) {
  const res = await request
    .get(`${baseUrl}/${travelDetailId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body
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
