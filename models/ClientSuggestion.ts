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
export interface UserDraft {
  email: string
  first_name: string
}
export interface User extends UserDraft {
  auth0_id: string
}

export interface TravelDetails {
  id: number
  auth0_id: string
  date: string
  city: string
}

export interface Itinerary {
  id: number
  travel_detail_id: number
  suggestion_id: number
}
