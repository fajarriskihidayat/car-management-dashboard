import { Request, Response } from "express";
import CarService from "../services/cars";

const cloudinary = require("cloudinary").v2;

const get = async (req: Request, res: Response) => {
  const getType = await new CarService().get();

  res.status(200).json({
    data: getType,
    message: "Get all Cars",
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const getById = await new CarService().getById(id);

    res.status(200).json({
      data: getById,
      message: "Get cars by Id",
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
    });
  }
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

      //@ts-ignore
      const addType = await new CarService().post({
        type_id,
        brand_id,
        price,
        year,
        img_url: result.url,
      });

      res.status(201).json({
        data: addType,
        message: "Created car success",
      });
    });
  } catch (error) {
    res.status(500).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const updateCars = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
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

      //@ts-ignore
      const updateData = await new CarService().put(id, {
        type_id,
        brand_id,
        price,
        year,
        img_url: result.url,
      });

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

    //@ts-ignore
    const deleteData = await new CarService().delete(id);

    if (deleteData === 0) throw new Error("User not found");

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete car success",
    });
  } catch (error) {
    res.status(500).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

module.exports = {
  get,
  post,
  getById,
  updateCars,
  deleteCars,
};
