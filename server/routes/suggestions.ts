import express from 'express'

import * as db from '../db/suggestions'
import { validateAccessToken } from '../auth0.ts'
import { logError } from '../logger'

const router = express.Router()

// GET /api/v1/suggestions/search?city=Auckland
router.get('/search', validateAccessToken, async (req, res) => {
  const targetCity = req.query.city as string

  if (!targetCity) {
    res.status(400).json({ message: 'Please provide a city' })
    return
  }

  try {
    const data = await db.getSuggestions(targetCity)

    res.status(200).json(data)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to retrieve suggestions' })
  }
})

export default router
