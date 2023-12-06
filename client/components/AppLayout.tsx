import { Outlet } from 'react-router-dom'

import Nav from './Nav.tsx'

export default function AppLayout() {
  return (
    <>
      <div className="bg-white flex flex-col">
        <div>
          <Nav />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
