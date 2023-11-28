import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'

import HomePage from './components/HomePage.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
  </Route>
)
