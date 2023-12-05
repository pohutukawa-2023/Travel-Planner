import express from 'express'

import * as db from '../db/itinerary'
import { validateAccessToken } from '../auth0.ts'
import { logError } from '../logger'

const router = express.Router()

// POST /api/v1/itinerary
router.post('/', validateAccessToken, async (req, res) => {
  const { detailId, suggestionId } = req.body

  if (!detailId) {
    res.status(400).json({ message: 'Please provide a detailId' })
    return
  }

  if (!suggestionId) {
    res.status(400).json({ message: 'Please provide a suggestionId' })
    return
  }

  const newItinerary = {
    detail_id: detailId,
    suggestion_id: suggestionId,
  }

  try {
    await db.addItinerary(newItinerary)

    res.sendStatus(201)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

export default router
