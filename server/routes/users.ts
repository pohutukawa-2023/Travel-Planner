import express from 'express'

import * as db from '../db/users'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

//POST /api/v1/users
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0_id = req.auth?.sub
  const userDetails = req.body
  const user = { ...userDetails, auth0_id }
  await db.upsertUser(user)
  res.sendStatus(201)
  return
})

export default router