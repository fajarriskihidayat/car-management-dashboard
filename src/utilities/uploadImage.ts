import { Request, Response } from "express";
const cloudinary = require("cloudinary").v2;

const uploadImage = (req: Request, res: Response) => {
  //@ts-ignore
  const filebase64 = req.file.buffer.toString("base64");
  //@ts-ignore
  const file = `data:${req.file.mimetype};base64,${filebase64}`;

  return new Promise((resolve, reject) => {
    //@ts-ignore
    cloudinary.uploader.upload(file, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.url);
      }
    });
  });
};

module.exports = uploadImage;
