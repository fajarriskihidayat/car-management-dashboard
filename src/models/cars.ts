import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id!: number;
  type_id!: number;
  brand_id!: number;
  price!: number;
  year!: string;
  img_url!: string;

  static get tableName() {
    return "cars";
  }
}

export type Cars = ModelObject<CarsModel>;
