import { Request, Response } from "express";
import { CarsModel } from "../models/cars";

const cloudinary = require("cloudinary").v2;

const get = async (req: Request, res: Response) => {
  const getType = await CarsModel.query()
    .join("car_type", "cars.type_id", "car_type.id")
    .join("car_brand", "cars.brand_id", "car_brand.id")
    .select(
      "cars.*",
      "car_brand.name as brand_name",
      "car_type.type as car_type"
    )
    .orderBy("id", "asc");

  res.status(200).json({
    data: getType,
    message: "Get all Cars",
  });
};

const post = async (req: Request, res: Response) => {
  try {
    const { type_id, brand_id, price, year } = req.body;

    if (!type_id || !brand_id || !price || !year) throw new Error("Data null");

    //@ts-ignore
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    //@ts-ignore
    const filebase64 = req.file.buffer.toString("base64");
    //@ts-ignore
    const file = `data:${req.file.mimetype};base64,${filebase64}`;

    //@ts-ignore
    cloudinary.uploader.upload(file, async (err, result) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const addType = await CarsModel.query()
        .insert({ type_id, brand_id, price, year, img_url: result.url })
        .returning("*");

      res.status(201).json({
        data: addType,
        message: "Created car success",
      });
    });
  } catch (error) {
    res.status(401).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getTypeById = await CarsModel.query()
      .where("id", id)
      .throwIfNotFound();

    res.status(200).json({
      data: getTypeById,
      message: "Get cars by Id",
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

const updateCars = async (req: Request, res: Response) => {
  try {
    const { type_id, brand_id, price, year } = req.body;
    const { id } = req.params;

    if (!type_id || !brand_id || !price || !year) throw new Error("Data null");

    //@ts-ignore
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    //@ts-ignore
    const filebase64 = req.file.buffer.toString("base64");
    //@ts-ignore
    const file = `data:${req.file.mimetype};base64,${filebase64}`;

    //@ts-ignore
    cloudinary.uploader.upload(file, async (err, result) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const updateData = await CarsModel.query()
        .where("id", "=", id)
        .update({ type_id, brand_id, price, year, img_url: result.url });

      res.status(200).json({
        data: {
          updated: updateData,
        },
        message: "Update car success",
      });
    });
  } catch (error) {
    res.status(401).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const deleteCars = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteData = await CarsModel.query().where("id", id).del();

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete car success",
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  get,
  post,
  getById,
  updateCars,
  deleteCars,
};
