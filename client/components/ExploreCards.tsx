import { Link } from 'react-router-dom'

interface Props {
  city: string
}

function ExploreCards(props: Props) {
  return (
    <>
      <Link to="/places">
        <img src="../public/city-paris.jpg" alt="Paris" />

        <p>{`Top places for ${props.city}`}</p>
      </Link>

      <Link to="/resturants">
        <img src="../public/hotel-paris.jpg" alt="Paris Resturants" />

        <p>{`Top places for ${props.city}`}</p>
      </Link>

      <Link to="/hotels">
        <img src="../public/resturant-paris.jpg" alt="Paris" />

        <p>{`Top places for ${props.city}`}</p>
      </Link>
    </>
  )
}

export default ExploreCards
