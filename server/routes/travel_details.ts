import express from 'express'

import * as db from '../db/travel_details'
import { validateAccessToken } from '../auth0.ts'

const router = express.Router()

// POST /api/v1/travelDetail
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub as string
  const { newDate, newCity } = req.body

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
    const response = await db.addTravelDetail(newTravelDetail)

    res.status(201).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

// GET /api/v1/travelDetail
router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub as string

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const data = await db.getTravelDetails(auth0Id)

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

// GET /api/v1/travelDetail/:detailId
router.get('/:detailId', validateAccessToken, async (req, res) => {
  const detailId = Number(req.params.detailId)

  if (!detailId) {
    res.status(400).json({ message: 'Please provide an detailId' })
    return
  }

  try {
    const data = await db.getTravelDetailAndSuggestions(detailId)

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

export default router
