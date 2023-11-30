export interface FruitSnakeCase {
  id?: number
  name: string
  average_grams_each: number
  added_by_user?: string
}

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

export interface FruitData {
  name: string
  averageGramsEach: number
}
