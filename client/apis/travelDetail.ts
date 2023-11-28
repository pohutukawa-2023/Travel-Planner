import request from 'superagent'

const detailUrl = '/api/v1/travelDetail'

interface tripDetail {
  date: string
  city: string
}

//post
export async function addTrip(newTrip: tripDetail, token: string) {
  await request
    .post(detailUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newTrip)
}
