import React, { useState } from 'react'
import SelectedInfo from './SelectedPlan'
import { useSearchParams } from 'react-router-dom'

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCity = searchParams.get('selectedCity')
  const selectedDepartureDate = searchParams.get('selectedDepartureDate')
  const selectedReturnDate = searchParams.get('selectedReturnDate')

  return (
    <>
      <div className="select">
        <h2>Trip to {selectedCity}</h2>
        <div>From {selectedDepartureDate} - </div>
        <div>{selectedReturnDate}</div>
      </div>

      <div className="explore">
        <div className="card-container">
          <div className="card">
            <h2>Top places for {selectedCity}</h2>
            <p>Most often seen on the web</p>
          </div>
          <div className="card">
            <h2>Best restaurent in {selectedCity}</h2>
            <p>Most often seen on the web</p>
          </div>
          <div className="card">
            <h2>Search hotels with transparent pricing</h2>
            <p>Unlike most sites, we do not sort based on commisions </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
