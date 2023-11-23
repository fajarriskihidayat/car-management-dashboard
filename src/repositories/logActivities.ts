import { LogActivitiesModel } from "../models/logActivities";

interface Payload {
  activities: string;
  user_id: number;
  car_id: number;
}

export default class LogActivitiesRepo {
  async get() {
    return await LogActivitiesModel.query()
      .join("users", "log_activities.user_id", "users.id")
      .join("cars", "log_activities.car_id", "cars.id")
      .select(
        "log_activities.id",
        "log_activities.activities",
        "users.email as user_email",
        "cars.name as car_name",
        "log_activities.created_at"
      );
  }

  async post(param: Payload) {
    return await LogActivitiesModel.query().insert(param).returning("*");
  }
}
