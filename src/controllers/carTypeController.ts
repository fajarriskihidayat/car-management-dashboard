import { Request, Response } from "express";
import { CarTypeModel } from "../models/carType";

const get = async (req: Request, res: Response) => {
  const getType = await CarTypeModel.query();

  res.status(200).json({
    data: getType,
    message: "Get all type",
  });
};

const post = async (req: Request, res: Response) => {
  try {
    const { type } = req.body;

    if (!type) throw new Error("Data null");

    const addType = await CarTypeModel.query()
      .insert({ type: type })
      .returning("*");

    res.status(201).json({
      data: addType,
      message: "Created type success",
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getTypeById = await CarTypeModel.query()
      .where("id", id)
      .throwIfNotFound();

    res.status(200).json({
      data: getTypeById,
      message: "Get type by Id",
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

const deleteType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteData = await CarTypeModel.query().where("id", id).del();

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete type success",
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateType = async (req: Request, res: Response) => {
  try {
    const { type } = req.body;
    const { id } = req.params;

    if (!type) throw new Error("Data null");

    const updateData = await CarTypeModel.query()
      .where("id", "=", id)
      .update({ type });

    res.status(200).json({
      data: {
        updated: updateData,
      },
      message: "Update type success",
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  get,
  getById,
  post,
  deleteType,
  updateType,
};
