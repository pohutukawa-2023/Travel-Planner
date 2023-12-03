import { useQuery } from '@tanstack/react-query'
import { getSuggestions } from '../apis/suggestions'

function Records() {
  const { data, isLoading } = useQuery({
    queryKey: ['record'],
    queryFn: async () => {
      return await getSuggestions('Auckland')
    },
  })

  return (
    <>
      {data?.map((suggestion) => (
        <h1 key={suggestion.id}>{suggestion.name}</h1>
      ))}
    </>
  )
}

export default Records
