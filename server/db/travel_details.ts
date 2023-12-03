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

export async function getTravelDetailAndSuggestions(
  travelDetailId: number,
  db = connection
) {
  const travelDetail = await db('travel_details').where('id', travelDetailId).select().first()
  const suggestions = await db('suggestions')
    .select()
    .whereExists(function () {
      this.select('id')
        .from('itinerary')
        .whereRaw('itinerary.suggestion_id = suggestions.id')
        .andWhere('itinerary.detail_id', travelDetailId)
    })


  const response = {
    travelDetail: travelDetail,
    suggestions: suggestions,
  }

  return response
}
