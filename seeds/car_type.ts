import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("car_type").del();

  // Inserts seed entries
  await knex("car_type").insert([
    { id: 1, type: "small" },
    { id: 2, type: "medium" },
  ]);
}
