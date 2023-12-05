import { Outlet } from 'react-router-dom'

import Nav from './Nav.tsx'

export default function AppLayout() {
  return (
    <div className="bg-slate-400">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
