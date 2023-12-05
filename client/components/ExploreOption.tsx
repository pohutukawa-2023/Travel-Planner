import { useAuth0 } from '@auth0/auth0-react'
import useSuggestions from '../hooks/useSuggestions'

function ExploreOption() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const { data } = useSuggestions('Rome')
  const hotels = data?.filter((suggestion) => suggestion.category == 'hotel')
  const places = data?.filter((suggestion) => suggestion.category == 'place')
  const restaurants = data?.filter(
    (suggestion) => suggestion.category == 'restaurant'
  )

  if (!isAuthenticated) {
    loginWithRedirect()
    return null
  }

  return (
    <>
      <h2>Explore your trips</h2>
    </>
  )
}

export default ExploreOption
