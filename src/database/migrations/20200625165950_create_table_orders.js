exports.up = knex => knex.schema.createTable('orders', table => {
    table.increments('id').primary()
    table.integer('quantity').unique().notNullable()
    table.string('note')
    table.foreign('product_id').references('products.id')
    table.boolean('is_payd_out').notNullable().defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.Now())
    table.timestamp('updated_at').defaultTo(knex.fn.Now())
  })

exports.down = knex => knex.schema.dropTable('orders')
