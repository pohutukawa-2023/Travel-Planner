import React, { useState } from 'react'
import SetDate from './SetDate'
import Cities from './Cities'
import { createSearchParams, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function SelectedInfo() {
  const [submittedData, setSubmittedData] = useState(null)
  const navigate = useNavigate()
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
    // onSubmittedData(selectedCity, selectedDepartureDate, selectedReturnDate)
    const params = { selectedCity, selectedDepartureDate, selectedReturnDate }
    navigate({
      pathname: '/explore',
      search: `?${createSearchParams(params)}`,
    })

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
      {submittedData && (
        <div className="result">
          <div className="citie">Trip to {submittedData.city}</div>
          <div className="date">
            Date {submittedData.departureDate} - {submittedData.returnDate}
          </div>
        </div>
      )}
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
