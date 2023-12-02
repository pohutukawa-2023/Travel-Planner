import connection from './connection.ts'

interface NewTravelDetail {
  user_id: string
  date: string
  city: string
}

export async function addTravelDetail(
  newTravelDetail: NewTravelDetail,
  db = connection
) {
  return await db('travel_details').insert(newTravelDetail)
}

export async function getTravelDetails(
  userId: string,
  db = connection
) {
  return await db('travel_details').where('user_id', userId).select()
}
