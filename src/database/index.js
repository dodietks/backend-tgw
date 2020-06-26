const knexfile = require('../../knexfile');
const { development } = require('../../knexfile')
const knex = require('knex')(knexfile[development])

module.exports = knex