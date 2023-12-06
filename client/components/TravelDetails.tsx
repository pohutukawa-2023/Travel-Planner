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
    <>
      <h2>TravelDetails</h2>
      <h3>My travel</h3>
      City: {data.travelDetail.city}
      <br />
      start_date: {data.travelDetail.start_date}
      <br />
      end_date: {data.travelDetail.end_date}
      <h3>My stops</h3>
      <ul>
        {data.suggestions?.map((d: Suggestion) => (
          <li key={d.id}>
            Name: <a href={d.link}>{d.name}</a>
            <br />
            Rating: {d.rating}
            <br />
            category: {d.category}
            <br />
            Address: {d.address}
            <br />
            Opening_hours: {d.opening_hours}
            <br />
            Description: {d.description}
            <br />
            Price_range: {d.price_range}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TravelDetails
