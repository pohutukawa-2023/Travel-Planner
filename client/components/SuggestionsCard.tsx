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
  return (
    <>
      <h1>Here is a list of {props.category}</h1>
      {data?.map((item) => (
        <Card tripId={tripId} key={item.id} item={item} />
      ))}
    </>
  )
}

export default SuggestionsCard
