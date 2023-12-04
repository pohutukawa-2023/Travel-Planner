import React from 'react'
import { useNavigate } from 'react-router-dom'
import useTravelDetails from '../hooks/useTravelDetails'
import { useAuth0 } from '@auth0/auth0-react'

import { z } from 'zod'

const tripSchema = z.object({
  city: z.string(),
  start_date: z.string(),
  end_date: z.string(),
})

function SelectTrip() {
  const navigate = useNavigate()
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

  const { addMutation } = useTravelDetails()
  const { getAccessTokenSilently } = useAuth0()

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const city = formData.get('selectedCity')
    const startDateInput = formData.get('departureDate')
    const endDateInput = formData.get('returnDate')
    1
    const inputData = {
      city: city,
      start_date: startDateInput,
      end_date: endDateInput,
    }

    const accessToken = await getAccessTokenSilently()

    const result = tripSchema.safeParse(inputData)

    if (!result.success) {
      alert(result.error)
      return
    }

    // mutate here
    addMutation.mutate({ token: accessToken, addTripDetail: result.data })

    // then we navigate to a new client-side route
    navigate(
      `/explore?city=${city}&start=${startDateInput}&end=${endDateInput}`
    )
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label
            htmlFor="cities"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="cities"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="selectedCity"
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
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Start planning
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SelectTrip
