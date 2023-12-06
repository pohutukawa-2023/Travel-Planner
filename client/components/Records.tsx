import { Link } from 'react-router-dom'
import useTravelDetails from '../hooks/useTravelDetails'

function Records() {
  const { data } = useTravelDetails()

  return (
    <>
      <h2>Trip Records</h2>
      {data?.map((element) => (
        <div key={element.id}>
          <Link to={`/my-travel/${element.id}`}>
            <h4>{element.city}</h4>
          </Link>

          <p>
            From: {element.start_date} TO: {element.end_date}
          </p>
        </div>
      ))}
    </>
  )
}

export default Records
