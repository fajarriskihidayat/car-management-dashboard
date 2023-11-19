import { CarTypeModel } from "../models/carType";

export default class CarTypeRepository {
  async get() {
    return await CarTypeModel.query();
  }

  async getById(id: number) {
    return await CarTypeModel.query().where("id", id).throwIfNotFound();
  }

  async post(type: string) {
    return await CarTypeModel.query().insert({ type: type }).returning("*");
  }

  async put(id: number, type: string) {
    return await CarTypeModel.query().where("id", "=", id).update({ type });
  }

  async delete(id: number) {
    return await CarTypeModel.query().where("id", id).del();
  }
}
