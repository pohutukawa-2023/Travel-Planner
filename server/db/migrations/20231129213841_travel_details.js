export async function up(knex) {
  await knex.schema.createTable('travel_details', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.string('date')
    table.string('start_date')
    table.string('end_date')
    table.string('city')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('travel_details')
}
