import { Request, Response } from "express";
import CarService from "../services/cars";
import LogActivitiesService from "../services/logActivities";

const cloudinary = require("cloudinary").v2;
const uploadImage = require("../utilities/uploadImage");

const get = async (req: Request, res: Response) => {
  const cars = await new CarService().get();

  res.status(200).json({
    message: "Get all Cars",
    data: cars,
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const car = await new CarService().getById(id);
    if (!car) return res.status(404).json({ message: "User is not exist" });

    res.status(200).json({
      message: "Get car by Id",
      data: car,
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const { name, type_id, brand_id, price, year } = req.body;

    if (!name || !type_id || !brand_id || !price || !year) {
      return res.status(400).json({ message: "Data null" });
    }

    //@ts-ignore
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    let url;
    try {
      url = await uploadImage(req, res);
    } catch (error) {
      return res.status(500).json({
        //@ts-ignore
        message: error.message,
      });
    }

    //@ts-ignore
    const addCar = await new CarService().post({
      name,
      type_id,
      brand_id,
      price,
      year,
      img_url: url,
    });

    await new LogActivitiesService().post({
      activities: "CREATE",
      //@ts-ignore
      user_id,
      car_id: addCar.id,
    });

    res.status(201).json({
      message: "Created car success",
      data: addCar,
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const updateCars = async (req: Request, res: Response) => {
  try {
    const { user_id, id } = req.params;
    const { name, type_id, brand_id, price, year } = req.body;

    if (!name || !type_id || !brand_id || !price || !year) {
      return res.status(400).json({ message: "Data null" });
    }

    //@ts-ignore
    const car = await new CarService().getById(id);
    const hasChanged =
      //@ts-ignore
      car.name !== name ||
      //@ts-ignore
      car.type_id !== Number(type_id) ||
      //@ts-ignore
      car.brand_id !== Number(brand_id) ||
      //@ts-ignore
      car.price !== Number(price) ||
      //@ts-ignore
      car.year !== year;

    if (!hasChanged) {
      return res.status(400).json({ message: "No changes detected" });
    }

    //@ts-ignore
    if (req.file) {
      let url;
      try {
        url = await uploadImage(req, res);
      } catch (error) {
        return res.status(500).json({
          //@ts-ignore
          message: error.message,
        });
      }
    }

    //@ts-ignore
    const updateData = await new CarService().put(id, {
      name,
      type_id,
      brand_id,
      price,
      year,
      //@ts-ignore
      img_url: !req.file ? car.img_url : url,
    });

    if (updateData === 0) {
      return res.status(404).json({ message: "User is not exist" });
    }

    await new LogActivitiesService().post({
      activities: "UPDATE",
      //@ts-ignore
      user_id,
      //@ts-ignore
      car_id: car.id,
    });

    res.status(200).json({
      message: "Update car success",
      data: {
        updated: updateData,
      },
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const deleteCars = async (req: Request, res: Response) => {
  try {
    const { user_id, id } = req.params;

    //@ts-ignore
    const car = await new CarService().getById(id);

    //@ts-ignore
    const deleteData = await new CarService().delete(id);

    if (deleteData === 0) {
      return res.status(404).json({ message: "User is not exist" });
    }

    await new LogActivitiesService().post({
      activities: "DELETE",
      //@ts-ignore
      user_id,
      //@ts-ignore
      car_id: car.id,
    });

    res.status(200).json({
      message: "Delete car success",
      data: {
        deleted: deleteData,
      },
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  post,
  getById,
  updateCars,
  deleteCars,
};
