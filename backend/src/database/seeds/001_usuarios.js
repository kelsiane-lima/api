
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        {name:"Kelsiane", email:"kelsianelima74@gmail.com", senha:"96881554"}
      ]);
    });
};
