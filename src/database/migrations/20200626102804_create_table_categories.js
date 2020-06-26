exports.up = knex => knex.schema.createTable('categories', table => {
  table.increments('id').primary()
  table.string('type').notNullable()
  table.timestamp('created_at').defaultTo(knex.fn.Now())
  table.timestamp('updated_at').defaultTo(knex.fn.Now())
}) 

exports.down = knex => knex.schema.dropTable('categories')