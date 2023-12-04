// import { useAuth0 } from '@auth0/auth0-react'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
// import { NavGroup, NavButton } from './Styled.tsx'
// import { Link } from 'react-router-dom'

// function Nav() {
//   const { user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0()

//   const handleSignOut = () => {
//     logout()
//   }

//   const handleSignIn = () => {
//     loginWithRedirect()
//   }

//   return (
//     <>
//       <nav className="bg-white-800 py-4">
//         <div className="container mx-auto flex items-center justify-between">
//           <Link
//             to="/"
//             className="text-black hover:text-gray-300 transition duration-300"
//           >
//             <span className="sr-only">Home</span>
//             <img
//               className="h-8 w-auto"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               alt=""
//             />
//           </Link>
//         </div>

//         <div className="flex lg:hidden"></div>

//         <Link to="/records">
//           <button
//             type="button"
//             className="text-black hover:text-gray-300 transition duration-300"
//           >
//             Records
//           </button>
//         </Link>

//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <IfAuthenticated>
//             <NavButton
//               className="text-gray-900 hover:text-gray-300 transition duration-300"
//               type="button"
//               onClick={handleSignOut}
//             >
//               Sign Out <span aria-hidden="true">&rarr;</span>
//             </NavButton>
//             {user && <p>Signed in as: {user?.nickname}</p>}
//           </IfAuthenticated>
//           <IfNotAuthenticated>
//             <NavButton
//               className="text-gray-900 hover:text-gray-300 transition duration-300"
//               type="button"
//               onClick={handleSignIn}
//             >
//               Log in <span aria-hidden="true">&rarr;</span>
//             </NavButton>
//           </IfNotAuthenticated>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Nav

import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <nav className="bg-white-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-white hover:text-gray-300 transition duration-300"
        >
          <span className="sr-only">Home</span>
          <img
            className="h-8 w-auto"
            src="images/apple-touch-icon.png"
            alt=""
          />
        </Link>
        <IfAuthenticated>
          <div className="flex space-x-3 text-2xl font-bold mb-3">
            <Link to="/records" className="text-slate-500 hover:text-blue-600">
              Records
            </Link>
          </div>
        </IfAuthenticated>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <IfAuthenticated>
            <p className="text-slate-500 hover:text-blue-600">
              Signed in as: {user?.nickname}
            </p>
            <NavButton
              className="text-slate-500 hover:text-blue-600"
              onClick={handleSignOut}
            >
              Sign Out <span aria-hidden="true">&rarr;</span>
            </NavButton>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <NavButton
              className="text-slate-500 hover:text-blue-600"
              onClick={handleSignIn}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavButton>
          </IfNotAuthenticated>
        </div>
      </div>
    </nav>
  )
}

export default Nav
