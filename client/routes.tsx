import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'

import HomePage from './components/HomePage.tsx'

import Explore from './components/Explore.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/plan" element={<Explore />} />
    <Route path="/explore" element={<Explore />} />
  </Route>
)
