import { Knex } from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('clientes', table => {
    table.increments('cdcl').primary();
    table.string('dsnome', 50).notNullable();
    table.decimal('dslim', 2).notNullable();

    table.specificType('idtipo', 'char(2)')
      .notNullable();

    table.integer('vendedores_cdvend')
      .notNullable()
      .references('cdvend')
      .inTable('vendedores')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('clientes');
}