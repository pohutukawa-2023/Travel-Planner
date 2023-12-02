import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'

import suggestionsRoutes from './routes/suggestions.ts'
import travelDetailsRoutes from './routes/travel_details.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/suggestions', suggestionsRoutes)
server.use('/api/v1/travelDetail', travelDetailsRoutes)

server.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public/index.html'))
})

export default server
