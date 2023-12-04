import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SelectTrip() {
  const navigate = useNavigate()
  const [selectedCity, setSelectedCity] = useState('')
  const cities = [
    'Auckland',
    'Paris',
    'Sydney',
    'Tokyo',
    'New York',
    'Singapore',
    'Dubai',
    'Rome',
    'Istanbul',
    'Wellington',
  ]
  function handleCityChange(e) {
    setSelectedCity(e.target.value)
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const city = formData.get('selectedCity')
    const startDateInput = formData.get('departureDate')
    const endDateInput = formData.get('returnDate')
    // mutate here
    console.log('formadata: ', city)
    // then we navigate to a new client-side route
    navigate(
      `/explore?city=${city}&start=${startDateInput}&end=${endDateInput}`
    )
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            name="selectedCity"
            id="selectedCity"
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="departureDate">From:</label>
          <input type="date" id="departureDate" name="departureDate" />
          <label htmlFor="returnDate">To:</label>
          <input type="date" id="returnDate" name="returnDate" />
          <div>
            <button type="submit" className="btn start-btn">
              Start planning
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default SelectTrip
