import { Model, ModelObject } from "objection";

export class CarBrandModel extends Model {
  id!: number;
  name!: string;

  static get tableName() {
    return "car_brand";
  }
}

export type CarBrand = ModelObject<CarBrandModel>;
