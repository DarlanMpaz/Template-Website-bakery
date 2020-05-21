
exports.up = function(knex) {
   knex.schema.createTable('produto', function(table)  {
    table.string('id').primary();
    table.string('img').notNullable();
    table.string('titulo').notNullable();
    table.string('descricao').notNullable();
    table.string('detalhes').notNullable();
    table.decimal('preco', 2).notNullable();
    table.integer('desconto').notNullable();
   })
};

exports.down = function(knex) {
  knex.schema.dropTable('produto');
};
