import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("car_type", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("type", 255).notNullable;
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("car_type");
}
