import { Link } from 'react-router-dom'
import Cities from './Cities'

function Explore() {
  return (
    <>
      <h2>Plan a new trip</h2>
      <Cities />
      <Link to="/explore">
        <button type="button" className="btn start-btn">
          Start planning
        </button>
      </Link>
    </>
  )
}

export default Explore
