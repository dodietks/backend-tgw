
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, type: 'Sem categoria'},
        {id: 2, type: 'Comidas'},
        {id: 3, type: 'Bebidas'}
      ]);
    });
};
