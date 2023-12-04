import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getSuggestions } from '../apis/suggestions'

function useSuggestions(city: string) {
  const { getAccessTokenSilently } = useAuth0()
  const { data } = useQuery({
    queryKey: ['suggestion'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getSuggestions(city, accessToken)
      return response
    },
  })

  return { data }
}

export default useSuggestions
