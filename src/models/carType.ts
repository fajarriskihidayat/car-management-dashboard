import { Model, ModelObject } from "objection";

export class CarTypeModel extends Model {
  id!: number;
  type!: string;

  static get tableName() {
    return "car_type";
  }
}

export type CarType = ModelObject<CarTypeModel>;
