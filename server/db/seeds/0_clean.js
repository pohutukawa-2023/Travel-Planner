export async function seed(knex) {
  await knex('itinerary').del()
  await knex('travel_details').del()
  await knex('suggestions').del()
}
