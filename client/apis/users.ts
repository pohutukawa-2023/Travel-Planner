import request from 'superagent'
import { User, UserDraft } from '../../models/ClientSuggestion'

export async function upsertUser(user: User | UserDraft, token: string) {
  await request
    .post('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .send(user)
}
