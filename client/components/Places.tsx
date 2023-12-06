import { Link, useSearchParams } from 'react-router-dom'
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
      <Link
        className="text-slate-500 hover:text-blue-600"
        to={`/explore?city=${city}&start=2023-12-14&end=2023-12-30&tripId=${tripId}`}
      >
        <span aria-hidden="true">&larr;</span>Explore more
      </Link>
      <SuggestionsCard tripId={tripId} data={places} category="places" />
    </>
  )
}

export default Places
