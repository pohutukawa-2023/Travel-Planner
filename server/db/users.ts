import connection from './connection'
import { User } from '../../models/ClientSuggestion'

export async function upsertUser(user: User) {
  await connection('users')
    .insert({
      auth0_id: user.auth0_id,
      email: user.email,
      first_name: user.first_name,
    })
    .onConflict('auth0_id')
    .merge()
}
