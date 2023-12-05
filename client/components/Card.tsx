interface Props {
  item: {
    name: string
    address: string
    description: string
    rating: string
    openingHours: string
    priceRange: string
    link: string
  }
}

function Card(props: Props) {
  const { name, address, description, rating, openingHours, priceRange, link } =
    props.item

  function handleAddButton() {
    console.log('add ')
  }
  return (
    <>
      <p>
        <strong>Name: </strong>
        {name}
        <br />
        <strong>Address:</strong> {address}
        <br />
        <strong>Description:</strong> {description}
        <br />
        <strong>Rating:</strong> {rating}
        <br />
        <strong>Opening Hours:</strong>
        {openingHours ? openingHours : 'Not available'}
        <br />
        <strong>Price range:</strong>
        {priceRange ? priceRange : 'Not available'}
        <br />
        <a href={link}>Official website</a>
      </p>

      <button onClick={handleAddButton}>Add to trip</button>
    </>
  )
}

export default Card
