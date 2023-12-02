import express from 'express'

import * as db from '../db/travel_details'

const router = express.Router()

// POST /api/v1/travelDetail
router.post('/', async (req, res) => {
  const auth0Id = req.auth?.payload.sub as string
  const {newDate, newCity} = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  const newTravelDetail = {
    user_id: auth0Id,
    date: newDate,
    city: newCity,
  }

  try {
    await db.addTravelDetail(newTravelDetail)

    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

export default router
