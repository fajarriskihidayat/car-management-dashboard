import express, { Express, Request, Response } from "express";
import knex from "knex";
import { Model } from "objection";

const PORT: Number = 3000;

const carsRoute = require("./src/routes/carsRoute");
const carTypeRoute = require("./src/routes/carTypeRoute");
const carBrandRoute = require("./src/routes/carBrandRoute");

const app: Express = express();
app.use(express.json());

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "car-rental",
    user: "postgres",
    password: "fajar20",
  },
});
Model.knex(knexInstance);

app.use("/v1/cars/", carsRoute);
app.use("/v1/cars/types", carTypeRoute);
app.use("/v1/cars/brands", carBrandRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
