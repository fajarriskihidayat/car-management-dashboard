import CarTypeRepository from "../repositories/carTypes";

export default class CarTypeService {
  #carTypeRepository: CarTypeRepository;

  constructor() {
    this.#carTypeRepository = new CarTypeRepository();
  }

  async get() {
    return await this.#carTypeRepository.get();
  }

  async getById(id: number) {
    return await this.#carTypeRepository.getById(id);
  }

  async post(type: string) {
    return await this.#carTypeRepository.post(type);
  }

  async put(id: number, type: string) {
    return await this.#carTypeRepository.put(id, type);
  }

  async delete(id: number) {
    return await this.#carTypeRepository.delete(id);
  }
}
