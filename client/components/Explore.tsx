import React, { useState } from 'react'
import SelectTrip from './SelectTrip'
import { Link, useSearchParams } from 'react-router-dom'
import useSuggestions from '../hooks/useSuggestions'

function Explore() {
  const [searchParams] = useSearchParams()
  // const selectedCity = searchParams.get('selectedCity')
  const selectedCity = searchParams.get('city')
  // const selectedDepartureDate = searchParams.get('selectedDepartureDate')
  const selectedDepartureDate = searchParams.get('start')
  // const selectedReturnDate = searchParams.get('selectedReturnDate')
  const selectedReturnDate = searchParams.get('end')

  return (
    <>
      <div className="select">
        <h2>Trip to {selectedCity}</h2>
        <div>From {selectedDepartureDate} - </div>
        <div>{selectedReturnDate}</div>
      </div>

      <div className="explore">
        <div className="card-container">
          <Link to={`/explore/places?city=${selectedCity}`}>
            <div className="card">
              <h2>Top places for {selectedCity}</h2>
              <p>Most often seen on the web</p>
            </div>
          </Link>
          <Link to={`/explore/restaurants?city=${selectedCity}`}>
            <div className="card">
              <h2>Best restaurents in {selectedCity}</h2>
              <p>Most often seen on the web</p>
            </div>
          </Link>
          <Link to={`/explore/hotels?city=${selectedCity}`}>
            <div className="card">
              <h2>Search hotels with transparent pricing</h2>
              <p>Unlike most sites, we do not sort based on commisions </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Explore
