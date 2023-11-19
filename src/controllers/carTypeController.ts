import { Request, Response } from "express";
import CarTypeService from "../services/carTypes";

const get = async (req: Request, res: Response) => {
  const getType = await new CarTypeService().get();

  res.status(200).json({
    data: getType,
    message: "Get all type",
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const getTypeById = await new CarTypeService().getById(id);

    res.status(200).json({
      data: getTypeById,
      message: "Get type by Id",
    });
  } catch (error) {
    res.status(404).json({
      message: "Type not found",
    });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const { type } = req.body;

    if (!type) throw new Error("Data null");

    const addType = await new CarTypeService().post(type);

    res.status(201).json({
      data: addType,
      message: "Created type success",
    });
  } catch (error) {
    res.status(400).json({
      //@ts-ignore
      message: error.message,
    });
  }
};
const updateType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    if (!type) throw new Error("Data null");

    //@ts-ignore
    const updateData = await new CarTypeService().put(id, type);

    if (updateData === 0) throw new Error("Type not found");

    res.status(200).json({
      data: {
        updated: updateData,
      },
      message: "Update type success",
    });
  } catch (error) {
    res.status(400).json({
      //@ts-ignore
      message: error.message,
    });
  }
};

const deleteType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const deleteData = await new CarTypeService().delete(id);

    if (deleteData === 0) throw new Error("Type not found");

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete type success",
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
  deleteType,
  updateType,
};
