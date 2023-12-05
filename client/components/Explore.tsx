import { Link } from 'react-router-dom'
import Cities from './Cities'
import SetDate from './SetDate'

import { useAuth0 } from '@auth0/auth0-react'

function Explore() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (!isAuthenticated) {
    loginWithRedirect()
    return null
  }

  return (
    <>
      <h2>Plan a new trip</h2>
      <Cities />

      <SetDate />

      <Link to="/explore">
        <button type="button" className="btn start-btn">
          Start planning
        </button>
      </Link>
    </>
  )
}

export default Explore
