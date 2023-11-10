import { Request, Response } from "express";
import { CarBrandModel } from "../models/carBrand";

const get = async (req: Request, res: Response) => {
  const getType = await CarBrandModel.query();

  res.status(200).json({
    data: getType,
    message: "Get all name",
  });
};

const post = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) throw new Error("Data null");

    const addType = await CarBrandModel.query()
      .insert({ name: name })
      .returning("*");

    res.status(201).json({
      data: addType,
      message: "Created name success",
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getTypeById = await CarBrandModel.query()
      .where("id", id)
      .throwIfNotFound();

    res.status(200).json({
      data: getTypeById,
      message: "Get name by Id",
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

const deleteBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteData = await CarBrandModel.query().where("id", id).del();

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete name success",
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateBrand = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const updateData = await CarBrandModel.query()
      .where("id", "=", id)
      .update({ name });

    res.status(200).json({
      data: {
        updated: updateData,
      },
      message: "Update name success",
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  get,
  getById,
  post,
  deleteBrand,
  updateBrand,
};
