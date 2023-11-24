import { Request, Response } from "express";
import LogActivitiesService from "../services/logActivities";

const get = async (req: Request, res: Response) => {
  const getLog = await new LogActivitiesService().get();

  res.status(200).json({
    message: "Get all log activities",
    data: getLog,
  });
};

module.exports = {
  get,
};
