export async function up(knex) {
  await knex.schema.createTable('bundles', (table) => {
    table.increments('id').primary()
    table.integer('detail_id').references('travel_details.id')
    table.integer('suggestion_id').references('suggestions.id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('bundles')
}
