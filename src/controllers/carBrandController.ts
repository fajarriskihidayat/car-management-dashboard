import { Request, Response } from "express";
import CarBrandService from "../services/carBrands";

const get = async (req: Request, res: Response) => {
  const getBrands = await new CarBrandService().get();

  res.status(200).json({
    data: getBrands,
    message: "Get all name",
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const getBrandById = await new CarBrandService().getById(id);

    res.status(200).json({
      data: getBrandById,
      message: "Get name by Id",
    });
  } catch (error) {
    res.status(404).json({
      message: "Brand not found",
    });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) throw new Error("Data null");

    const addBrand = await new CarBrandService().post(name);

    res.status(201).json({
      data: addBrand,
      message: "Created name success",
    });
  } catch (error) {
    res.status(400).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const updateBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) throw new Error("Data null");

    //@ts-ignore
    const updateData = await new CarBrandService().put(id, name);

    if (updateData === 0) throw new Error("Brand not found");

    res.status(200).json({
      data: {
        updated: updateData,
      },
      message: "Update name success",
    });
  } catch (error) {
    res.status(400).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const deleteBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const deleteData = await new CarBrandService().delete(id);

    if (deleteData === 0) throw new Error("Brand not found");

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete name success",
    });
  } catch (error) {
    res.status(400).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

module.exports = {
  get,
  getById,
  post,
  deleteBrand,
  updateBrand,
};
