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
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>

        <div className="flex lg:hidden"></div>

        <Link to="/records">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Records
          </button>
        </Link>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <IfAuthenticated>
            <NavButton
              className="text-sm font-semibold leading-6 text-gray-900"
              type="button"
              onClick={handleSignOut}
            >
              Sign Out <span aria-hidden="true">&rarr;</span>
            </NavButton>
            {user && <p>Signed in as: {user?.nickname}</p>}
          </IfAuthenticated>
          <IfNotAuthenticated>
            <NavButton
              className="text-sm font-semibold leading-6 text-gray-900"
              type="button"
              onClick={handleSignIn}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavButton>
          </IfNotAuthenticated>
        </div>
      </nav>
    </>
  )
}

export default Nav
