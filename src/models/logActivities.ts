import { Model, ModelObject } from "objection";

export class LogActivitiesModel extends Model {
  id!: number;
  activities!: string;
  user_id!: number;
  car_id!: number;
  created_at!: string;

  static get tableName() {
    return "log_activities";
  }
}

export type Cars = ModelObject<LogActivitiesModel>;
