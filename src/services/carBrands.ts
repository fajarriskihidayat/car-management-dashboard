import CarBrandRepository from "../repositories/carBrands";

export default class CarBrandService {
  #carBrandRepository: CarBrandRepository;

  constructor() {
    this.#carBrandRepository = new CarBrandRepository();
  }

  async get() {
    return await this.#carBrandRepository.get();
  }

  async getById(id: number) {
    return await this.#carBrandRepository.getById(id);
  }

  async post(name: string) {
    return await this.#carBrandRepository.post(name);
  }

  async put(id: number, name: string) {
    return await this.#carBrandRepository.put(id, name);
  }

  async delete(id: number) {
    return await this.#carBrandRepository.delete(id);
  }
}
