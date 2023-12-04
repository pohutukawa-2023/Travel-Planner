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

      <button
        onClick={handleAddButton}
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add to trip
      </button>
    </>
  )
}

export default Card
