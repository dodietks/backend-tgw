exports.up = knex => knex.schema.createTable('orders', table => {
    table.increments('id').primary()
    table.integer('quantity').notNullable()
    table.string('note')
    table.integer('product_id').unsigned().notNullable()
    table.foreign('product_id').references('products.id')
    table.boolean('is_payd_out').notNullable().defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('orders')
