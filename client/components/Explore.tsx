import { Link } from 'react-router-dom'
import Cities from './Cities'
import SetDate from './SetDate'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Mutation } from '@tanstack/react-query'
import useAddTrips from '../hooks/useAddTrips'
import { newTrip } from '../../models/ClientSuggestion'

function Explore() {
  function handleInput() {
    console.log('input')
  }
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { addMutation } = useAddTrips()

  const [newCity, setNewCity] = useState('')
  const [newDate, setNewDate] = useState('')

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  // async function handleSubmit(form: newTrip) {
  //   const token = await getAccessTokenSilently()
  //   addMutation.mutate({ form, token })
  // }

  async function handleSumbit() {
    const token = await getAccessTokenSilently()

    addMutation.mutate(
      {
        date: '5',
        // date: newDate,
        city: newCity,
      },
      token
    )
  }
  return (
    <>
      <h2>Plan a new trip</h2>
      <Cities
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Where to?"
      />

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
