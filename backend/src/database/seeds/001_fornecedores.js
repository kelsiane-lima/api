
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fornecedores').del()
    .then(function () {
      // Inserts seed entries nome, cnpj, celular, email, endereco 
      return knex('fornecedores').insert([
        {nome:"João Henrique", cnpj:"127287367237893", celular:"8896881554", email:"joaobezerra@gmail.com", endereco:"Canto Verde"},
        {nome:"maria Lima", cnpj:"127287367237893", celular:"8896881554", email:"maria@gmail.com", endereco:"Icapui, CE"}
      ]);
    });
};
