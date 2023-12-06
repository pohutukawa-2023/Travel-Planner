import { useAuth0 } from '@auth0/auth0-react'

import { addNewItinerary } from '../apis/itinerary'
import { useState } from 'react'

interface Props {
  tripId: number
  item: {
    id: number
    name: string
    address: string
    description: string
    rating: string
    openingHours: string
    priceRange: string
    link: string
  }
}

function Card(props: Props) {
  const [isAdded, setIsAdded] = useState(false)
  const { getAccessTokenSilently } = useAuth0()
  const {
    id,
    name,
    address,
    description,
    rating,
    openingHours,
    priceRange,
    link,
  } = props.item

  const tripId = props.tripId

  async function handleAddButton() {
    const accessToken = await getAccessTokenSilently()
    console.log('add ')
    const newItinerary = {
      detailId: tripId,
      suggestionId: id,
    }
    await addNewItinerary(newItinerary, accessToken)

    setIsAdded(!isAdded)
  }
  return (
    <>
      <p>
        <strong>Name: </strong>
        {name}
        <br />
        <strong>Address:</strong> {address}
        <br />
        <strong>Description:</strong> {description}
        <br />
        <strong>Rating:</strong> {rating}
        <br />
        <strong>Opening Hours:</strong>
        {openingHours ? openingHours : 'Not available'}
        <br />
        <strong>Price range:</strong>
        {priceRange ? priceRange : 'Not available'}
        <br />
        <a
          className="text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          Official website
        </a>
      </p>

      <button
        className={`text-4xl p-2 rounded-full ${
          isAdded ? 'text-red-500' : 'text-gray-500'
        }`}
        onClick={handleAddButton}
      >
        {isAdded ? '❤️' : '♡'}
      </button>
    </>
  )
}

export default Card
