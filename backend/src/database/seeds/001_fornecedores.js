
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fornecedores').del()
    .then(function () {
      // Inserts seed entries nome, cnpj, telefone, email, endereco 
      return knex('fornecedores').insert([
        {nome:"João Henrique", cnpj:"127287367237893", telefone:"8896881554", email:"joaobezerra@gmail.com", endereco:"Canto Verde, Beberibe, CE"},
        {nome:"maria Lima", cnpj:"127287367237893", telefone:"8891928299", email:"maria@gmail.com", endereco:"Beberibe, CE"}
      ]);
    });
};
