
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fabricantes').del()
    .then(function () {
      // Inserts seed entries
      return knex('fabricantes').insert([
        {nome:"ZATZ", telefone:"8891928289", site:"https://calcadoszatz.com.br/novo/empresa/"}
      ]);
    });
};
