exports.up = knex => knex.schema.cheateTable('orders', table => {
    table.increments('id').primary()
    table.integer('quantity').unique().notNullable()
    table.string('note')
    table.integer('product_id').unsigned().references('products.id')
    table.boolean('is_payd_out').notNullable().defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.Now())
    table.timestamp('updated_at').defaultTo(knex.fn.Now())
  })

exports.down = function(knex) {
  return knex.schema.dropTable('orders')
};
