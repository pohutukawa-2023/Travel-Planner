import React, { useState } from 'react'
import SelectedInfo from './SelectedPlan'
import { useSearchParams } from 'react-router-dom'

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCity = searchParams.get('selectedCity')
  const selectedDepartureDate = searchParams.get('selectedDepartureDate')
  const selectedReturnDate = searchParams.get('selectedReturnDate')

  return (
    <div className="select">
      <h2>Plan a new trip</h2>
      <div>Trip to {selectedCity}</div>
      <div>From {selectedDepartureDate} - </div>
      <div>{selectedReturnDate}</div>
    </div>
  )
}

export default Explore
