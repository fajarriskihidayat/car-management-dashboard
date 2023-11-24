import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "log_activities",
    (table: Knex.TableBuilder) => {
      table.increments("id").primary();
      table.string("activities", 255).notNullable();
      table.integer("user_id", 4).notNullable();
      table.integer("car_id", 4).notNullable();
      table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("log_activities");
}
