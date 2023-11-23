import { RolesModel } from "../models/roles";

export default class CarBrandRepository {
  async get() {
    return await RolesModel.query();
  }

  async getById(id: number) {
    return await RolesModel.query().findOne("id", id);
  }

  async post(role: string) {
    return await RolesModel.query().insert({ role: role }).returning("*");
  }

  async put(id: number, role: string) {
    return await RolesModel.query().where("id", "=", id).update({ role });
  }

  async delete(id: number) {
    return await RolesModel.query().where("id", id).del();
  }
}
