import knex from "knex";
import { Model } from "objection";

const express = require("express");
const carsRoute = require("./src/routes/carsRoute");
const carTypeRoute = require("./src/routes/carTypeRoute");
const carBrandRoute = require("./src/routes/carBrandRoute");

//@ts-ignore
const app: Express = express();
const cloudinary = require("cloudinary").v2;
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "car-rental",
    user: "postgres",
    password: "fajar20",
  },
});

const PORT: number = 3000;

Model.knex(knexInstance);
cloudinary.config({
  cloud_name: "dq5jhu4au",
  api_key: "399692775172739",
  api_secret: "0LU4oIx9GpAiofiE45nHWLBLMgY",
});

app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static("public"));

app.use("/v1/cars/", carsRoute);
app.use("/v1/cars/types", carTypeRoute);
app.use("/v1/cars/brands", carBrandRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
