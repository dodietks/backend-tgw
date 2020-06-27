exports.up = knex => knex.schema.createTable('categories', table => {
    table.increments('id').primary()
    table.string('type').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('categories')