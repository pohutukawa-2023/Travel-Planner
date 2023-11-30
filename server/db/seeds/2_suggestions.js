export async function seed(knex) {
  await knex('suggestions').insert([
    {
      name: 'Auckland Zoo',
      city_name: 'Auckland',
      category: 'place',
      description: 'The best zoo in south',
      rating: 5,
      address: '',
      opening_hours: '24 hours',
      link: '',
      price_range: '',
    },
  ])
}
