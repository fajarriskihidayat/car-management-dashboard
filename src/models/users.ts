import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  name!: string;
  email!: string;
  password!: string;
  role!: string;

  static get tableName() {
    return "users";
  }

  $beforeInsert() {
    this.role = this.role || "member";
  }
}

export type Users = ModelObject<UserModel>;
