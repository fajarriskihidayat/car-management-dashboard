import { Request, Response } from "express";
import UserService from "../services/users";

const jwt = require("jsonwebtoken");

const isSuperAdmin = async (req: Request, res: Response, next: unknown) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken?.split("Bearer ")[1];
    const tokenPayload = jwt.verify(
      token,
      process.env.SIGNATURE_KEY || "rahasia"
    );

    //@ts-ignore
    req.user = await new UserService().getById(tokenPayload.id);

    //@ts-ignore
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Permission denied" });
    }

    //@ts-ignore
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = isSuperAdmin;
