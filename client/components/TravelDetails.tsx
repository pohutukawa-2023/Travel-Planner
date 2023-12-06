import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getTravelDetailWithSuggestions } from '../apis/traveDetails'
import { Suggestion } from '../../models/suggestion'

function TravelDetails() {
  const { getAccessTokenSilently } = useAuth0()
  const { travelId } = useParams()

  async function retriveTravelDetail() {
    const accessToken = await getAccessTokenSilently()
    return await getTravelDetailWithSuggestions(Number(travelId), accessToken)
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['travelDetailWithSuggestions'],
    queryFn: retriveTravelDetail,
  })

  if (isLoading) {
    return <p>Loading</p>
  }

  if (isError) {
    return <p>something went wrong</p>
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Travel Details</h2>
      <h3 className="text-xl font-bold mb-2">My Travel</h3>
      <p>City: {data.travelDetail.city}</p>
      <p>Start Date: {data.travelDetail.start_date}</p>
      <p>End Date: {data.travelDetail.end_date}</p>

      <h3 className="text-xl font-bold my-4">My Stops</h3>
      <ul className="list-disc pl-4">
        {data.suggestions?.map((d: Suggestion) => (
          <li key={d.id} className="mb-4">
            <p>
              <span className="font-bold">Name:</span>{' '}
              <a href={d.link} className="text-blue-500 hover:underline">
                {d.name}
              </a>
            </p>
            <p>Rating: {d.rating}</p>
            <p>Category: {d.category}</p>
            <p>Address: {d.address}</p>
            <p>Opening Hours: {d.opening_hours}</p>
            <p>Description: {d.description}</p>
            <p>Price Range: {d.price_range}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TravelDetails
