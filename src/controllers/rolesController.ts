import { Request, Response } from "express";
import RolesService from "../services/roles";

const get = async (req: Request, res: Response) => {
  const getRoles = await new RolesService().get();

  res.status(200).json({
    message: "Get all roles",
    data: getRoles,
  });
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const role = await new RolesService().getById(id);
    if (!role) return res.status(404).json({ message: "Role is not exist" });

    res.status(200).json({
      message: "Get role by Id",
      data: role,
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const { role } = req.body;

    if (!role) return res.status(400).json({ message: "Data null" });

    const addRole = await new RolesService().post(role);

    res.status(201).json({
      message: "Created role success",
      data: addRole,
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const updateRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!role) return res.status(400).json({ message: "Data null" });

    //@ts-ignore
    const updateData = await new RolesService().put(id, role);

    if (updateData === 0) {
      return res.status(404).json({ message: "Role is not exist" });
    }

    res.status(200).json({
      message: "Update role success",
      data: {
        updated: updateData,
      },
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const deleteRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@ts-ignore
    const deleteData = await new RolesService().delete(id);

    if (deleteData === 0) {
      return res.status(404).json({ message: "Role is not exist" });
    }

    res.status(200).json({
      message: "Delete role success",
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
  deleteRole,
  updateRole,
};
