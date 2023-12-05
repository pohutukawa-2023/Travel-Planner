import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'

import HomePage from './components/HomePage.tsx'

import Explore from './components/Explore.tsx'

import SelectTrip from './components/SelectTrip.tsx'
import Places from './components/Places.tsx'
import Hotels from './components/Hotels.tsx'
import Restaurants from './components/Restaurants.tsx'
import Records from './components/Records.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/plan" element={<SelectTrip />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/records" element={<Records />} />
    <Route path="/explore/places" element={<Places />} />
    <Route path="/explore/hotels" element={<Hotels />} />
    <Route path="/explore/restaurants" element={<Restaurants />} />
  </Route>
)
