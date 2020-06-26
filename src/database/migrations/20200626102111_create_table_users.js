exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('name').notNullable()
  table.timestamp('created_at').defaultTo(knex.fn.Now())
  table.timestamp('updated_at').defaultTo(knex.fn.Now())
}) 

exports.down = knex => knex.schema.dropTable('users')