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
    return await UserModel.query().findOne("email", email);
  }
}
