import React, { useState } from 'react'
import SelectTrip from './SelectTrip'
import { Link, useSearchParams } from 'react-router-dom'
import useSuggestions from '../hooks/useSuggestions'

function Explore() {
  const [searchParams] = useSearchParams()
  const selectedCity = searchParams.get('city')
  const tripId = searchParams.get('tripId')
  const lowerCaseCity = selectedCity?.toLowerCase()

  const selectedDepartureDate = searchParams.get('start')
  const selectedReturnDate = searchParams.get('end')

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trip to {selectedCity}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              From {selectedDepartureDate} - {selectedReturnDate}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Explore</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <Link
                to={`/explore/places?city=${selectedCity}&tripId=${tripId}`}
              >
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={`/images/${selectedCity}/${lowerCaseCity}-place.jpg`}
                      alt={selectedCity || ''}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Top places for {selectedCity}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Most often seen on the web
                  </p>
                </div>
              </Link>

              <Link
                to={`/explore/hotels?city=${selectedCity}&tripId=${tripId}`}
              >
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={`/images/${selectedCity}/${lowerCaseCity}-hotel.jpg`}
                      alt={selectedCity || ''}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Search hotels with transparent pricing {selectedCity}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Unlike most sites, we do not sort based on commisions
                  </p>
                </div>
              </Link>

              <Link
                to={`/explore/restaurants?city=${selectedCity}&tripId=${tripId}`}
              >
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={`/images/${selectedCity}/${lowerCaseCity}-restaurent.jpg`}
                      alt={selectedCity || ''}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Best restaurents in {selectedCity}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Most often seen on the web
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
