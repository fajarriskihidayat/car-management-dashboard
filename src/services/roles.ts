import RolesRepository from "../repositories/roles";

export default class CarBrandService {
  #rolesRepository: RolesRepository;

  constructor() {
    this.#rolesRepository = new RolesRepository();
  }

  async get() {
    return await this.#rolesRepository.get();
  }

  async getById(id: number) {
    return await this.#rolesRepository.getById(id);
  }

  async post(role: string) {
    return await this.#rolesRepository.post(role);
  }

  async put(id: number, role: string) {
    return await this.#rolesRepository.put(id, role);
  }

  async delete(id: number) {
    return await this.#rolesRepository.delete(id);
  }
}
