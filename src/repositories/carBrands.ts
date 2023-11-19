import { CarBrandModel } from "../models/carBrand";

export default class CarBrandRepository {
  async get() {
    return await CarBrandModel.query();
  }

  async getById(id: number) {
    return await CarBrandModel.query().where("id", id).throwIfNotFound();
  }

  async post(name: string) {
    return await CarBrandModel.query().insert({ name: name }).returning("*");
  }

  async put(id: number, name: string) {
    return await CarBrandModel.query().where("id", "=", id).update({ name });
  }

  async delete(id: number) {
    return await CarBrandModel.query().where("id", id).del();
  }
}
