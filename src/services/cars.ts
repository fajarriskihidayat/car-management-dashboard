import CarRepository from "../repositories/cars";

interface Payload {
  name: string;
  type_id: number;
  brand_id: number;
  price: number;
  year: string;
  img_url: string;
}

export default class CarService {
  #carRepository: CarRepository;

  constructor() {
    this.#carRepository = new CarRepository();
  }

  async get() {
    return await this.#carRepository.get();
  }

  async getById(id: number) {
    return await this.#carRepository.getById(id);
  }

  async post(param: Payload) {
    return await this.#carRepository.post(param);
  }

  async put(id: number, param: Payload) {
    return await this.#carRepository.put(id, param);
  }

  async delete(id: number) {
    return await this.#carRepository.delete(id);
  }
}
