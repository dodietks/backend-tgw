exports.up = knex => knex.schema.cheateTable('products', table => {
    table.increments('id').primary()
    table.string('name').unique().notNullable()
    table.string('description')
    table.float('price').notNullable()
    table.boolean('is_active').notNullable().defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.Now())
    table.timestamp('updated_at').defaultTo(knex.fn.Now())
  })

exports.down = knex => knex.schema.cheateTable('products')
