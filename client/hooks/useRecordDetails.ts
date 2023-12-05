import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getTravelDetailWithId } from '../apis/traveDetails'

function useRecordDetails(travelDetailId: number) {
  const { getAccessTokenSilently } = useAuth0()
  const { data } = useQuery({
    queryKey: ['recordDetails'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getTravelDetailWithId(travelDetailId, accessToken)
      return response
    },
  })
  return { data }
}

export default useRecordDetails
