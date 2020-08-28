
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table){
        table.string('id').primary()
        table.string('name')
        table.string('senha')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
  };