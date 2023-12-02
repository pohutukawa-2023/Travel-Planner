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
  return db('travel_details').insert(newTravelDetail)
}
