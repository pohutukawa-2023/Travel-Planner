import React, { useState } from 'react'
import SetDate from './SetDate'
import Cities from './Cities'
// import { Link } from 'react-router-dom'

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
    <div className="container">
      <div className="form">
        <Cities onCitySelect={handleCitySelect} />
        <SetDate
          onDepartureDateSelect={handleDepartureDateSelect}
          onReturnDateSelect={handleReturnDateSelect}
        />
      </div>

      <div className="start">
        {/* <Link to="/plan"> */}
        <button onClick={handleSubmit} type="button" className="btn start-btn">
          Start planning
        </button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default SelectedInfo
