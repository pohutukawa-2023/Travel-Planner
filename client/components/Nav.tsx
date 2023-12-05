import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/records">
          <button>Records</button>
        </Link>
        <IfAuthenticated>
          <NavButton className="btn" onClick={handleSignOut}>
            Sign out
          </NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton className="btn" onClick={handleSignIn}>
            Sign in
          </NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      <h1>Travel 4 you!</h1>
    </>
  )
}

export default Nav
