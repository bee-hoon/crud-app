import { config } from "dotenv";
import { env } from "process";

class Config {
  readonly port: number = env.PORT ? +env.PORT : 5000;

  constructor() {
    config();
  }
}

export default new Config();
