import express from 'express'

import * as db from '../db/travel_details'
import { validateAccessToken } from '../auth0.ts'
import { logError } from '../logger'

const router = express.Router()

// POST /api/v1/travelDetail
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub as string
  const { newStartDate, newEndDate, newCity } = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  if (!newStartDate) {
    res.status(400).json({ message: 'Please provide a newStartDate' })
    return
  }

  if (!newCity) {
    res.status(400).json({ message: 'Please provide a newCity' })
    return
  }

  const newTravelDetail = {
    user_id: auth0Id,
    start_date: newStartDate,
    end_date: newEndDate,
    city: newCity,
    // date: newStartDate + '~' + newEndDate,
  }

  try {
    const response = await db.addTravelDetail(newTravelDetail)

    res.status(201).json(response)
  } catch (error) {
    logError(error)
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
    logError(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

// GET /api/v1/travelDetail/:detailId
router.get('/:detailId', validateAccessToken, async (req, res) => {
  const detailId = Number(req.params.detailId)

  try {
    const data = await db.getTravelDetailAndSuggestions(detailId)

    res.status(200).json(data)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

export default router
