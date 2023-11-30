import { Link } from 'react-router-dom'
import { getSuggestions } from '../apis/suggestions'

function HomePage() {
  console.log(async () => {
    await getSuggestions('Auckland')
  })
  return (
    <>
      <div className="homeContent">
        <h2>You will never travel without our trip planner again</h2>
        <h3>
          Build, organize, and map your itineraries in a free travel app
          designed for vacations & road trips
        </h3>
        <Link to="/plan">
          <button className="btn start-btn">Start Planning</button>
        </Link>
      </div>
    </>
  )
}
export default HomePage
