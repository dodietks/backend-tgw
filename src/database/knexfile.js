module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port: '3307',
      user : 'root',
      password : 'password',
      database : 'ecommerce'
    },
    migrations: {
      tableName: 'knex_migration',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
