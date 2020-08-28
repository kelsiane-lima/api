//Posso transformar em arrow function
//vários tipos, integer, float
exports.up = function(knex) {
  return knex.schema.createTable('produtos', function (table){
      table.increments('id').unique()
      table.string('name').notNullable()
      table.integer('qtd')
      table.integer('qtd_limite')
      table.string('tipo')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('update_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos')
};
