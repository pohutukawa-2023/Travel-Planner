export interface Suggestion {
  id: number
  name: string
  city_name: string
  category: string
  description: string
  address: string
  opening_hours: string
  link: string
  rating: number
  price_range: string
}

export interface User {
  auth0_id: string
  email: string
  first_name: string
  last_name: string
}

export interface TravelDetails {
  id: number
  auth0_id: string
  start_date: string
  end_date: string
  city: string
}

export interface AddTravelDetails {
  // id: number

  start_date: string
  end_date: string
  city: string
}

export interface Itinerary {
  id: number
  travel_detail_id: number
  suggestion_id: number
}
