import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/travel_details'
import { getMockToken } from './mockToken'

vi.mock('../db/travel_details')
vi.mock('../logger.ts')

describe('POST /api/v1/travelDetail', () => {
  const fakeTravelDetail = {
    newDate: '2024',
    newCity: 'Auckland',
  }
  it('should return 201 with an array', async () => {
    const fakeResponse = [1]
    vi.mocked(db.addTravelDetail).mockResolvedValue(fakeResponse)
    const response = await request(server)
      .post('/api/v1/travelDetail')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeTravelDetail)
    expect(response.status).toBe(201)
    expect(response.body).toEqual(fakeResponse)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.addTravelDetail).mockRejectedValue(new Error('test-travel'))
    const response = await request(server)
      .post('/api/v1/travelDetail')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeTravelDetail)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Something wrong' })
  })

  const fakeTravelDetailWithoutNewDate = {
    newDate: null,
    newCity: 'Auckland',
  }

  it('should return 400 when no newDate is passed', async () => {
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeTravelDetailWithoutNewDate)
    expect(response.status).toBe(400)
  })

  const fakeTravelDetailWithoutNewCity = {
    newDate: '2024',
    newCity: null,
  }

  it('should return 400 when no newCity is passed', async () => {
    const response = await request(server)
      .post('/api/v1/itinerary')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeTravelDetailWithoutNewCity)
    expect(response.status).toBe(400)
  })
})

describe('GET /api/v1/travelDetail', () => {
  it('should return 200 with an array', async () => {
    const fakeResponse = [
      {
        id: 1,
        user_id: 'auth0|6569360d76c1b421367afd49',
        date: '2028',
        city: 'Wellington',
      },
    ]
    vi.mocked(db.getTravelDetails).mockResolvedValue(fakeResponse)
    const response = await request(server)
      .get('/api/v1/travelDetail')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getTravelDetails).mockRejectedValue(new Error('test-travel'))
    const response = await request(server)
      .get('/api/v1/travelDetail')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Something wrong' })
  })
})

describe('GET /api/v1/travelDetail/:detailId', () => {
  it('should return 200 with an object', async () => {
    const fakeResponse = {
      travelDetail: {
        id: 1,
        user_id: 'auth0|6569360d76c1b421367afd49',
        date: '2028',
        city: 'Wellington',
      },
      suggestions: [
        {
          id: 9,
          name: 'Ortolana',
          city_name: 'Auckland',
          category: 'restaurant',
          description:
            'Enjoy a casual meal at Ortolana, offering fresh and seasonal produce.',
          rating: 4.5,
          address: '33 Tyler St, Britomart, Auckland',
          opening_hours: '8 AM - 10 PM',
          link: 'https://www.ortolana.co.nz/',
          price_range: '15-30',
        },
      ],
    }
    vi.mocked(db.getTravelDetailAndSuggestions).mockResolvedValue(fakeResponse)
    const response = await request(server)
      .get('/api/v1/travelDetail/1')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getTravelDetailAndSuggestions).mockRejectedValue(
      new Error('test-travel')
    )
    const response = await request(server)
      .get('/api/v1/travelDetail/1')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Something wrong' })
  })
})
