exports.up = knex => knex.schema.createTable('companies', table => {
  table.increments('id').primary()
  table.string('trade_name').unique().notNullable()
  table.string('company_name').notNullable()
  table.integet('phone').notNullable()
  table.foreign('owner_id').references('users.id')
  table.timestamp('created_at').defaultTo(knex.fn.Now())
  table.timestamp('updated_at').defaultTo(knex.fn.Now())
})

exports.down = knex => knex.schema.dropTable('companies')
