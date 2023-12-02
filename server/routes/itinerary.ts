import express from 'express'

import * as db from '../db/itinerary'

const router = express.Router()

// POST /api/v1/itinerary
router.post('/', async (req, res) => {
  const { detailId, suggestionId } = req.body


  const newItinerary = {
    detail_id: detailId,
    suggestion_id: suggestionId,
  }

  try {
    await db.addItinerary(newItinerary)

    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something wrong' })
  }
})

export default router