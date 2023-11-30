export async function seed(knex) {
  await knex('suggestions').del()
}
