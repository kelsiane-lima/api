
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function (table){
        table.increments('produto_id').primary()
        table.string('nome').notNullable()
        table.integer('qtd')
        table.integer('qtd_limite')
        table.string('tipo')
        table 
              .integer('fornecedor_id_')
              .references('fornecedores.fornecedor_id')
              .notNullable()
        table
              .integer('categoria_id_')
              .references('categorias.categoria_id')
              .notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
  };
  