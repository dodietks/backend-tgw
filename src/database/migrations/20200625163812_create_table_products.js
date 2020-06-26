exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').unique().notNullable()
    table.string('description')
    table.float('price').notNullable()
    table.boolean('is_active').notNullable().defaultTo(false)
    table.foreign('owner_id').references('company.id')
    table.foreign('category').references('categories.id').notNullable().defaultTo(1)
    table.timestamp('created_at').defaultTo(knex.fn.Now())
    table.timestamp('updated_at').defaultTo(knex.fn.Now())
  })

exports.down = knex => knex.schema.dropTable('products')
