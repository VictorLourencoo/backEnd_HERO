
exports.up = function(knex) {
  
  return Promise.all([
   knex.schema.createTable('incidents_ongs', function(table){
   table.increments().primary();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');


  })
])
};

exports.down = function(knex) {
  return Promise.all([
  knex.schema.dropTable('incidents_ongs')
  ])
};
