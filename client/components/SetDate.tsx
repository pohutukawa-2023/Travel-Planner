import { useState } from 'react'
import moment from 'moments'

function SetDate() {
  const [totalDays, setTotalDays] = useState(null)
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const startDateInput = form.get('departureDate')
    const endDateInput = form.get('returnDate')

    console.log(typeof startDateInput)

    // if(startDate && endDate){
    //   const start = new Date(startDate);
    //   const end = new Date(endDate);
    // }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="departureDate">From:</label>
        <input type="date" id="departureDate" name="departureDate" />
        <label htmlFor="returnDate">To:</label>
        <input type="date" id="returnDate" name="returnDate" />
        <button
          type="submit"
          className="btn start-btn"
          // onClick={() => handleSubmit()}
        >
          Start planning
        </button>
      </form>
    </div>
  )
}

export default SetDate
