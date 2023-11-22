import { Request, Response } from "express";
import CarBrandService from "../services/carBrands";

const get = async (req: Request, res: Response) => {
  const getBrands = await new CarBrandService().get();

  res.status(200).json({
    data: getBrands,
    message: "Get all brands",
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const brand = await new CarBrandService().getById(id);
    if (!brand) return res.status(404).json({ message: "Brand is not exist" });

    res.status(200).json({
      data: brand,
      message: "Get brand by Id",
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: "Data null" });

    const addBrand = await new CarBrandService().post(name);

    res.status(201).json({
      data: addBrand,
      message: "Created brand success",
    });
  } catch (error) {
    res.status(500).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const updateBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: "Data null" });

    //@ts-ignore
    const updateData = await new CarBrandService().put(id, name);

    if (updateData === 0) {
      return res.status(404).json({ message: "Brand is not exist" });
    }

    res.status(200).json({
      data: {
        updated: updateData,
      },
      message: "Update brand success",
    });
  } catch (error) {
    res.status(500).json({
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

    if (deleteData === 0) {
      return res.status(404).json({ message: "Brand is not exist" });
    }

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete brand success",
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
  getById,
  post,
  deleteBrand,
  updateBrand,
};
