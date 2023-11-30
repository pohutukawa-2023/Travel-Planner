import { Fab, Zoom } from '@mui/material'
import { useRef, useState } from 'react'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

function Cities() {
  const [isExpanded, setExpanded] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')

  const dropdownRef = useRef<HTMLDivElement>(null)

  const cities = [
    'Auckland',
    'Paris',
    'Sydney',
    'Tokyo',
    'New York',
    'Singapore',
    'Dubai',
    'Tape Town',
    'Vancouver',
    'Istanbul',
  ]

  const handleInputClick = () => {
    setShowDropdown(true)
  }

  function expand() {
    setExpanded(true)
  }

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setShowDropdown(false)
  }

  const clearInput = () => {
    setSelectedCity('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(e.target.value)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (
      !dropdownRef.current?.contains(e.target as Node) &&
      e.target !== document.getElementById('cityInput')
    ) {
      setShowDropdown(false)
    }
  }

  return (
    <>
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
                    key={index}
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
    </>
  )
}

export default Cities
