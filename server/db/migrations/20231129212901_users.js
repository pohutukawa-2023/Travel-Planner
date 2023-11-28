export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary().index()
    table.string('email')
    table.string('first_name')
    table.string('last_name')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
