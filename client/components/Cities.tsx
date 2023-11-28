import { useRef, useState } from 'react'

function Cities() {
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
    'Rome',
    'Istanbul',
    'Wellington',
  ]

  const handleInputClick = () => {
    setShowDropdown(true)
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
