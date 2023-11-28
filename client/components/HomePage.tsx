import { Link } from 'react-router-dom'

function HomePage() {
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
        <button className="btn app-btn">Get the app</button>
      </div>
    </>
  )
}
export default HomePage
