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
    <div className="select">
      <h2>Plan a new trip</h2>
      <SelectedInfo onSubmittedData={handleSubmittedData} />
      {submittedData && (
        <div className="result">
          <div className="citie">Trip to {submittedData.city}</div>
          <div className="date">
            Date {submittedData.departureDate} - {submittedData.returnDate}
          </div>
        </div>
      )}
    </div>
  )
}

export default Explore
