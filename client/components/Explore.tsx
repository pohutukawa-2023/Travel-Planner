import { Link } from 'react-router-dom'
import Cities from './Cities'
import SetDate from './SetDate'
import { useState } from 'react'

function Explore() {
  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  async function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value)
  }

  return (
    <>
      <h2>Plan a new trip</h2>
      <Cities onChange={handleInput} placeholder="Where to?" />

      <SetDate />

      <Link to="/explore">
        <button
          type="button"
          className="btn start-btn"
          // onClick={() => handleSubmit()}
        >
          Start planning
        </button>
      </Link>
    </>
  )
}

export default Explore
