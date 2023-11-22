import { Request, Response } from "express";
import CarTypeService from "../services/carTypes";

const get = async (req: Request, res: Response) => {
  const getType = await new CarTypeService().get();

  res.status(200).json({
    data: getType,
    message: "Get all types",
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const type = await new CarTypeService().getById(id);
    if (!type) return res.status(404).json({ message: "Type is not exist" });

    res.status(200).json({
      data: type,
      message: "Get type by Id",
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
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
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const updateType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    if (!type) throw new Error("Data null");

    //@ts-ignore
    const updateData = await new CarTypeService().put(id, type);

    if (updateData === 0) {
      return res.status(404).json({ message: "Type is not exist" });
    }

    res.status(200).json({
      data: {
        updated: updateData,
      },
      message: "Update type success",
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const deleteType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const deleteData = await new CarTypeService().delete(id);

    if (deleteData === 0) {
      return res.status(404).json({ message: "Type is not exist" });
    }

    res.status(200).json({
      data: {
        deleted: deleteData,
      },
      message: "Delete type success",
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
  deleteType,
  updateType,
};
