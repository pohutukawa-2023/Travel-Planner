import React, { useState } from 'react'
import SetDate from './SetDate'
import Cities from './Cities'

function SelectedInfo({ onSubmittedData }) {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('')
  const [selectedReturnDate, setSelectedReturnDate] = useState('')

  const handleCitySelect = (city: React.SetStateAction<string>) => {
    setSelectedCity(city)
  }

  const handleDepartureDateSelect = (date: React.SetStateAction<string>) => {
    setSelectedDepartureDate(date)
  }

  const handleReturnDateSelect = (date: React.SetStateAction<string>) => {
    setSelectedReturnDate(date)
  }

  const handleSubmit = () => {
    onSubmittedData(selectedCity, selectedDepartureDate, selectedReturnDate)
    setSelectedCity('')
    setSelectedDepartureDate('')
    setSelectedReturnDate('')
  }

  return (
    <div>
      <Cities onCitySelect={handleCitySelect} />
      <SetDate
        onDepartureDateSelect={handleDepartureDateSelect}
        onReturnDateSelect={handleReturnDateSelect}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SelectedInfo
