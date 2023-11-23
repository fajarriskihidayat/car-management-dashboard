import { Knex } from "knex";

const encryptPassword = require("../src/utilities/encryptPassword");

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  const encryptedPassword = await encryptPassword("admin123");

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      name: "admin",
      email: "admin@gmail.com",
      password: encryptedPassword,
      role_id: 1,
    },
  ]);
}
