import { useAuth0 } from '@auth0/auth0-react'

function ExploreOption() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect()
    return null
  }
  
  return <h2>Expolore your trips</h2>
}

export default ExploreOption
