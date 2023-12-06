import { useSearchParams } from 'react-router-dom'
import SuggestionsCard from './SuggestionsCard'
import useSuggestions from '../hooks/useSuggestions'

function Places() {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')
  const tripId = Number(searchParams.get('tripId'))
  const { data } = useSuggestions(city || '')
  const places = data?.filter((suggestion) => suggestion.category == 'place')

  if (!city) {
    return <>City not found</>
  }

  return (
    <>
      <SuggestionsCard tripId={tripId} data={places} category="places" />
    </>
  )
}

export default Places
