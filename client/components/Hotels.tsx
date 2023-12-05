import { useSearchParams } from 'react-router-dom'
import SuggestionsCard from './SuggestionsCard'
import useSuggestions from '../hooks/useSuggestions'

function Hotels() {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')
  const tripId = Number(searchParams.get('tripId'))
  const { data } = useSuggestions(city || '')
  const hotels = data?.filter((suggestion) => suggestion.category == 'hotel')

  if (!city) {
    return <>City not found</>
  }

  return (
    <>
      <SuggestionsCard tripId={tripId} data={hotels} category="hotels" />
    </>
  )
}

export default Hotels
