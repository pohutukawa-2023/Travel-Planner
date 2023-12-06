import { useSearchParams } from 'react-router-dom'
import { Suggestion } from '../../models/ClientSuggestion'
import Card from './Card'
interface Props {
  data: Suggestion[] | undefined
  category: string
  tripId: number
}

function SuggestionsCard(props: Props) {
  const data = props.data
  const tripId = props.tripId
  const [searchParams] = useSearchParams()
  const selectedCity = searchParams.get('city')
  const lowerCaseCity = selectedCity?.toLowerCase()
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:max-w-none lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here is a list of {props.category}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            {data?.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden w-1/4"
              >
                <div className="p-4">
                  {/* Card content here */}
                  <Card tripId={tripId} key={item.id} item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestionsCard
