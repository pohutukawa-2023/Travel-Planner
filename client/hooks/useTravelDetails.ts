import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { addTravelDetails, getTravelDetails } from '../apis/traveDetails'
import { AddTravelDetails } from '../../models/ClientSuggestion'

function useTravelDetails() {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['travelDetails'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getTravelDetails(accessToken)
      return response
    },
  })
  const addMutation = useMutation({
    mutationFn: ({
      token,
      addTripDetail,
    }: {
      token: string
      addTripDetail: AddTravelDetails
    }) => addTravelDetails(token, addTripDetail),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['travelDetails'] })
    },
  })

  return { data, addMutation }
}

export default useTravelDetails
