import { useQuery } from '@tanstack/react-query'

import { getSuggestions } from '../apis/suggestions'

function useSuggestions(city: string) {
  const { data } = useQuery({
    queryKey: ['suggestion'],
    queryFn: async () => {
      const response = await getSuggestions(city)
      console.log(response)
      return response
    },
  })

  return { data }
}

export default useSuggestions
