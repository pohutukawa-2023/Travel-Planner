import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'

import HomePage from './components/HomePage.tsx'

import Explore from './components/Explore.tsx'
import ExploreOption from './components/ExploreOption.tsx'
import PlaceRecommend from './components/PlacesRecommend.tsx'
import ResturantRecommend from './components/ResturantRecomment.tsx'
import HotelRecommend from './components/HotelRecommend.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/plan" element={<Explore />} />
    <Route path="/explore" element={<ExploreOption />} />
    <Route path="/places" element={<PlaceRecommend />} />
    <Route path="/resturants" element={<ResturantRecommend />} />
    <Route path="/hotels" element={<HotelRecommend />} />
  </Route>
)
