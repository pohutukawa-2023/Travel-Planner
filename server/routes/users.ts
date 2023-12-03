import express from 'express'

import * as db from '../db/users'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

//POST /api/v1/users
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0_id = req.auth?.sub as string
    const userDetails = req.body
    const user = { ...userDetails, auth0_id }
    await db.upsertUser(user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error has occured' })
  }
})

export default router
