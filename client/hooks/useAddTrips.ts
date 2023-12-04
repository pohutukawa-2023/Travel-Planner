import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { addTrip, getTripDetails } from '../apis/travelDetail'
import { newTrip } from '../../models/ClientSuggestion'

function useAddTrips() {
  const { user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['trips'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getTripDetails(accessToken)
        return response
      }
    },
  })
  const addMutation = useMutation({
    mutationFn: ({ form, token }: { form: newTrip; token: string }) =>
      addTrip(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trips'] })
      navigate('/explore')
    },
  })
  return { data, isLoading, addMutation }
}

export default useAddTrips
