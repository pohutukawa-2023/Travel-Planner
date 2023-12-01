import express from 'express'

import * as db from '../db/users'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

//POST /api/v1/users
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const id = req.auth?.sub
})

export default router
