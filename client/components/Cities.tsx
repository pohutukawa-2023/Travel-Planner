import React, { useState } from 'react'

function Cities({ onCitySelect }) {
  const [showDropdown, setShowDropdown] = useState(false)
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

  const handleInputClick = () => {
    setShowDropdown(true)
  }

  const handleCitySelect = (city: React.SetStateAction<string>) => {
    setSelectedCity(city)
    setShowDropdown(false)
    // Pass the selected city back to the parent component
    onCitySelect(city)
  }

  const clearInput = () => {
    setSelectedCity('')
  }

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSelectedCity(e.target.value)
  }

  const handleMouseLeave = (e: { target: HTMLElement | null }) => {
    if (
      !e.target.closest('.dropdown') &&
      e.target !== document.getElementById('cityInput')
    ) {
      setShowDropdown(false)
    }
  }

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
      <div className="input-wrapper">
        <input
          type="text"
          id="cityInput"
          value={selectedCity}
          placeholder="Where to?"
          onClick={handleInputClick}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />

        {selectedCity && (
          <span className="clear-btn" onClick={clearInput}>
            &times;
          </span>
        )}

        {showDropdown && (
          <ul className="dropdown-content">
            {cities.map((city, index) => (
              <li key={index}>
                <button
                  className="city-option"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cities
