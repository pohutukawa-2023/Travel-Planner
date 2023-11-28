import { Link } from 'react-router-dom'

interface Props {
  city: string
}

function ExploreCards(props: Props) {
  return (
    <>
      <div className="container">
        <div className="block">
          <Link to="/places" className="link">
            <img src="../public/city-paris.jpg" alt="Paris" />

            <p>{`Top places for ${props.city}`}</p>
          </Link>
        </div>

        <div className="block">
          <Link to="/resturants" className="link">
            <img src="../public/hotel-paris.jpg" alt="Paris Resturants" />

            <p>{`Top places for ${props.city}`}</p>
          </Link>
        </div>
        <div className="block">
          <Link to="/hotels" className="link">
            <img src="../public/resturant-paris.jpg" alt="Paris" />

            <p>{`Top places for ${props.city}`}</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ExploreCards
