import { useSearchParams } from 'react-router-dom'

function Explore() {
  const [searchParams] = useSearchParams()
  const selectedCity = searchParams.get('city')
  const lowerCaseCity = selectedCity?.toLowerCase()

  console.log(lowerCaseCity)

  const selectedDepartureDate = searchParams.get('start')
  const selectedReturnDate = searchParams.get('end')
  console.log(searchParams)

  return (
    <>
      <div className="explore">
        <div className="select">
          <div className="image-container">
            <img
              src={`/images/${selectedCity}/${selectedCity}-city.jpg`}
              alt={selectedCity || ''}
            />
            <div className="overlay">
              <div className="top-half">
                <h2>Trip to {selectedCity}</h2>
                <div>
                  From {selectedDepartureDate} - {selectedReturnDate}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <img
              src={`/images/${selectedCity}/${lowerCaseCity}-place.jpg`}
              alt={selectedCity || ''}
            />
            <h2>Top places for {selectedCity}</h2>
            <p>Most often seen on the web</p>
          </div>
          <div className="card">
            <img
              src={`/images/${selectedCity}/${lowerCaseCity}-hotel.jpg`}
              alt={selectedCity || ''}
            />
            <h2>Best restaurent in {selectedCity}</h2>
            <p>Most often seen on the web</p>
          </div>
          <div className="card">
            <img
              src={`/images/${selectedCity}/${lowerCaseCity}-restaurent.jpg`}
              alt={selectedCity || ''}
            />
            <h2>Search hotels with transparent pricing</h2>
            <p>Unlike most sites, we do not sort based on commisions </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
