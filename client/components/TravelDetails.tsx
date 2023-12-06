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

  function getCategoryStyle(category: string) {
    switch (category) {
      case 'place':
        return 'bg-green-200'
      case 'restaurant':
        return 'bg-yellow-200'
      case 'hotel':
        return 'bg-blue-200'
      default:
        return ''
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-2xl font-bold mb-4 text-center">My travel</h2>
      <hr />
      <div className="mb-6 text-center">
        <p className="text-lg font-semibold mb-2">To {data.travelDetail.city}</p>
        <p className="text-lg font-semibold mb-2">From {data.travelDetail.start_date} to {data.travelDetail.end_date}</p>
      </div>
      <br /><br />

      <h2 className="text-xl font-bold my-4 text-center">My stops</h2>
      <hr /><br />
      <ul className="list-none p-0 grid gap-4 text-center">
        {data.suggestions?.map((d: Suggestion) => (
          <li key={d.id} className={`mb-4 border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ${getCategoryStyle(d.category)}`}>
            <p>
              <span className="font-bold"></span>
              <a href={d.link} className="text-blue-500 hover:underline text-lg">
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
