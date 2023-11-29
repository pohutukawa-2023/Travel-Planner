export async function up(knex) {
  await knex.schema.createTable('travel_details', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id')
    table.string('date')
    table.string('city')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('travel_details')
}
