import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable().unique();
    table.integer("type_id", 4).notNullable();
    table.integer("brand_id", 4).notNullable();
    table.integer("price", 11).notNullable();
    table.string("year", 255).notNullable();
    table.string("img_url", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
