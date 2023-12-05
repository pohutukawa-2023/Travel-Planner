import { Suggestion } from '../../models/ClientSuggestion'
import Card from './Card'
interface Props {
  data: Suggestion[] | undefined
  category: string
}

function SuggestionsCard(props: Props) {
  const data = props.data
  return (
    <>
      <h1>Here is a list of {props.category}</h1>
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  )
}

export default SuggestionsCard
