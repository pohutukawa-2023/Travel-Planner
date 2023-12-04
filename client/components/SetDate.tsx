import React, { useState } from 'react'

function SetDate({ onDepartureDateSelect, onReturnDateSelect }) {
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const handleDepartureDateChange = (e: { target: { value: any } }) => {
    const dateValue = e.target.value
    setDepartureDate(dateValue)
    onDepartureDateSelect(dateValue)
  }

  const handleReturnDateChange = (e: { target: { value: any } }) => {
    const dateValue = e.target.value
    setReturnDate(dateValue)
    onReturnDateSelect(dateValue)
  }

  return (
    <div className="time">
      <form>
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={handleDepartureDateChange}
        />
        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={handleReturnDateChange}
        />
      </form>
    </div>
  )
}

export default SetDate
