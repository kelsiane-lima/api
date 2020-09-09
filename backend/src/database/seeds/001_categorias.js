
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categorias').del()
    .then(function () {
      // Inserts seed entries
      return knex('categorias').insert([
        { nome : 'Lingerie'},
        { nome : 'Roupas Masculinas'},
        { nome : 'Roupas Femininas'},
        { nome : 'Calçados Femininos'},
        { nome : 'Calçados Masculinos'},
        { nome : 'Acessórios'}
      ]);
    });
};
