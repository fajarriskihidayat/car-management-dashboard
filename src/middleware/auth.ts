import { Request, Response } from "express";
import UserService from "../services/users";

const jwt = require("jsonwebtoken");

const auth = async (req: Request, res: Response, next: unknown) => {
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
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
