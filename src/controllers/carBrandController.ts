import { Request, Response } from "express";
import CarBrandService from "../services/carBrands";

const get = async (req: Request, res: Response) => {
  const getBrands = await new CarBrandService().get();

  res.status(200).json({
    message: "Get all brands",
    data: getBrands,
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const brand = await new CarBrandService().getById(id);
    if (!brand) return res.status(404).json({ message: "Brand is not exist" });

    res.status(200).json({
      message: "Get brand by Id",
      data: brand,
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
      message: "Created brand success",
      data: addBrand,
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
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
      message: "Update brand success",
      data: {
        updated: updateData,
      },
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
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
      message: "Delete brand success",
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
  getById,
  post,
  deleteBrand,
  updateBrand,
};
