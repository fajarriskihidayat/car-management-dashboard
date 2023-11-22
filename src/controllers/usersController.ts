import { Request, Response } from "express";
import UserService from "../services/users";

const encryptPassword = require("../utilities/encryptPassword");
const checkPassword = require("../utilities/checkPassword");

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Data null" });
    }

    const encryptedPassword = await encryptPassword(password);

    await new UserService().register({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(201).json({
      message: "Register success",
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    const user = await new UserService().getByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Email is not exist" });
    }

    const checkedPwd = await checkPassword(password, user.password);
    if (!checkedPwd) {
      return res.status(401).json({ message: "Password is wrong" });
    }

    res.status(200).json({
      message: "Login success",
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
