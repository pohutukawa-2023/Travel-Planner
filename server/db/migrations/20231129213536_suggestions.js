export async function up(knex) {
  await knex.schema.createTable('suggestions', (table) => {
    table.increments('id').primary()
    table.string('city_name')
    table.string('category')
    table.string('description')
    table.integer('rating')
    table.string('address')
    table.string('opening_hours')
    table.string('link')
    table.string('price_range')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('suggestions')
}
