import { useSearchParams } from 'react-router-dom'
import SuggestionsCard from './SuggestionsCard'
import useSuggestions from '../hooks/useSuggestions'

function Restaurants() {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')
  const { data } = useSuggestions(city || '')
  const restaurants = data?.filter(
    (suggestion) => suggestion.category == 'restaurant'
  )

  if (!city) {
    return <>City not found</>
  }

  return (
    <>
      <SuggestionsCard data={restaurants} category="restaurants" />
    </>
  )
}

export default Restaurants
