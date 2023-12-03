export async function seed(knex) {
  await knex('travel_details').insert([
    {
      user_id: 'auth0|6569360d76c1b421367afd49',
      date: '20240101-20240102',
      city: 'Wellington',
    },
    {
      user_id: 'auth0|6569360d76c1b421367afd49',
      date: '20250101-20250102',
      city: 'Auckland',
    },
  ])
}
