import { Link } from 'react-router-dom'
import useTravelDetails from '../hooks/useTravelDetails'

function Records() {
  const { data } = useTravelDetails()

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Trip Records</h2>
        <div className="grid gap-4">
          {data?.map((element) => (
            <div
              key={element.id}
              className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <Link to={`/my-travel/${element.id}`}>
                <h4 className="text-xl font-semibold text-blue-600 hover:underline">
                  {element.city}
                </h4>
              </Link>

              <p className="mt-2">
                <span className="font-semibold">From:</span>{' '}
                {element.start_date} <span className="font-semibold">TO:</span>{' '}
                {element.end_date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Records
