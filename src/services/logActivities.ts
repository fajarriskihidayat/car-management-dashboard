import LogActivitiesRepo from "../repositories/logActivities";

interface Payload {
  activities: string;
  user_id: number;
  car_id: number;
}

export default class LogActivitiesService {
  #logActivitiesRepo: LogActivitiesRepo;

  constructor() {
    this.#logActivitiesRepo = new LogActivitiesRepo();
  }

  async get() {
    return await this.#logActivitiesRepo.get();
  }

  async post(param: Payload) {
    return await this.#logActivitiesRepo.post(param);
  }
}
