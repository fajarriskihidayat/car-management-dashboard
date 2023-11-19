import { CarsModel } from "../models/cars";

interface Payload {
  type_id: number;
  brand_id: number;
  price: number;
  year: string;
  img_url: string;
}

export default class CarRepository {
  async get() {
    return await CarsModel.query()
      .join("car_type", "cars.type_id", "car_type.id")
      .join("car_brand", "cars.brand_id", "car_brand.id")
      .select(
        "cars.id",
        "car_type.type as car_type",
        "car_brand.name as brand_name",
        "cars.price",
        "cars.year",
        "cars.img_url"
      )
      .orderBy("id", "asc");
  }

  async getById(id: number) {
    return await CarsModel.query().where("id", id).throwIfNotFound();
  }

  async post(param: Payload) {
    const { type_id, brand_id, price, year, img_url } = param;

    return await CarsModel.query()
      .insert({
        type_id,
        brand_id,
        price,
        year,
        img_url,
      })
      .returning("*");
  }

  async put(id: number, param: Payload) {
    const { type_id, brand_id, price, year, img_url } = param;

    return await CarsModel.query()
      .where("id", "=", id)
      .update({ type_id, brand_id, price, year, img_url });
  }

  async delete(id: number) {
    return await CarsModel.query().where("id", id).del();
  }
}
