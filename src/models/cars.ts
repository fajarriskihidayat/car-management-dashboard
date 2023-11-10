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

  static get relationMappings() {
    const { CarTypeModel } = require("./carType");
    const { CarBrandModel } = require("./carBrand");

    return {
      type: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarTypeModel,
        join: {
          from: "card.type_id",
          to: "car_type.id",
        },
      },
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarBrandModel,
        join: {
          from: "card.brand_id",
          to: "car_brand.id",
        },
      },
    };
  }
}

export type Cars = ModelObject<CarsModel>;
