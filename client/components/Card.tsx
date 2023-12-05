interface Props {
  item: {
    name: string
    address: string
    description: string
    rating: string
    openingHours: string
    priceRange: string
  }
}

function Card(props: Props) {
  const { name, address, description, rating, openingHours, priceRange } =
    props.item
  return (
    <>
      <p>
        Name: {name}
        <br />
        Address: {address}
        <br />
        Description: {description}
        <br />
        Rating: {rating}
        <br />
        Opening Hours: {openingHours}
        <br />
        Price Range: $ {priceRange}
      </p>
    </>
  )
}

export default Card
