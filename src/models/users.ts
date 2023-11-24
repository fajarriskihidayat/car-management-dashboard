import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  name!: string;
  email!: string;
  password!: string;
  role_id!: number;

  static get tableName() {
    return "users";
  }

  $beforeInsert() {
    this.role_id = this.role_id || 3;
  }
}

export type Users = ModelObject<UserModel>;
