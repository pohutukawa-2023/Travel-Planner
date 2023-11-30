import React, { useState } from 'react'
import SelectedInfo from './SelectedPlan'

function Explore() {
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmittedData = (
    city: any,
    departureDate: any,
    returnDate: any
  ) => {
    setSubmittedData({
      city,
      departureDate,
      returnDate,
    })
  }

  return (
    <div>
      <h2>Plan a new trip</h2>
      <SelectedInfo onSubmittedData={handleSubmittedData} />

      {/* Display submitted data from SelectedInfo */}
      {submittedData && (
        <div>
          <div>City: {submittedData.city}</div>
          <div>From: {submittedData.departureDate}</div>
          <div>To: {submittedData.returnDate}</div>
        </div>
      )}
    </div>
  )
}

export default Explore
