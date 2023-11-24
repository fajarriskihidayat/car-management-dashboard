import UserRepository from "../repositories/users";

interface Payload {
  name: string;
  email: string;
  password: string;
}

export default class UserService {
  #userRepository: UserRepository;

  constructor() {
    this.#userRepository = new UserRepository();
  }

  async register(param: Payload) {
    return await this.#userRepository.register(param);
  }

  async getByEmail(email: string) {
    return await this.#userRepository.getByEmail(email);
  }

  async getById(id: number) {
    return await this.#userRepository.getById(id);
  }

  async put(id: number) {
    return await this.#userRepository.put(id);
  }
}
