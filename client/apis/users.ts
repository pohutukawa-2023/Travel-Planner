import request from 'superagent'
import { User, UserDraft } from '../../models/ClientSuggestion'

const baseUrl = '/api/v1/users'
export async function upsertUser(user: User | UserDraft, token: string) {
  await request.post(baseUrl).set('Authorization', `Bearer ${token}`).send(user)
}
