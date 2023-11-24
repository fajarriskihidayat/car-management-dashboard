import { UserModel } from "../models/users";

interface Payload {
  name: string;
  email: string;
  password: string;
}

export default class UserRepository {
  async register(param: Payload) {
    return await UserModel.query().insert(param).returning("*");
  }

  async getByEmail(email: string) {
    return await UserModel.query()
      .findOne("users.email", email)
      .join("roles", "users.role_id", "roles.id")
      .select(
        "users.id",
        "users.name",
        "users.email",
        "users.password",
        "roles.role as role"
      );
  }

  async getById(id: number) {
    return await UserModel.query()
      .findOne("users.id", id)
      .join("roles", "users.role_id", "roles.id")
      .select(
        "users.id",
        "users.name",
        "users.email",
        "users.password",
        "roles.role as role"
      );
  }

  async put(id: number) {
    return await UserModel.query().where("id", "=", id).update({ role_id: 2 });
  }
}
