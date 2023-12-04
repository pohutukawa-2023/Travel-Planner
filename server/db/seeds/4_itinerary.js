export async function seed(knex) {
  await knex('itinerary').insert([
    {
      detail_id: 1,
      suggestion_id: 1,
    },
    {
      detail_id: 1,
      suggestion_id: 10,
    },
    {
      detail_id: 1,
      suggestion_id: 100,
    },
    {
      detail_id: 2,
      suggestion_id: 150,
    },
  ])
}
