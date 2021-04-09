import { Knex } from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('vendedores', table => {
    table.increments('cdvend').primary();
    table.string('dsnome', 50).notNullable();
    table.integer('cdtab').notNullable();
    table.date('dtnasc').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('vendedores');
}