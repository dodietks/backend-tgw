exports.up = knex => knex.schema.createTable('img', table => {
  table.increments('id').primary()
  table.string('name').notNullable()
  table.boolean('main').notNullable().defaultTo(true)
  table.integer('products_id').unsigned().notNullable()
  table.foreign('products_id').references('products.id')
  table.timestamp('created_at').defaultTo(knex.fn.now())
}) 

exports.down = knex => knex.schema.dropTable('img')