import { DataSource, DataSourceOptions } from "typeorm";

import { config } from "dotenv";
import { env } from "process";

import Product from "../entity/Product";

class Database {
  private readonly host: string = env.DB_HOST ? env.DB_HOST : "127.0.0.1";
  private readonly port: number = env.DB_PORT ? +env.DB_PORT : 3306;
  private readonly username: string = env.DB_USERNAME
    ? env.DB_USERNAME
    : "root";
  private readonly password: string = env.DB_PASSWORD ? env.DB_PASSWORD : "";
  private readonly database: string = env.DB_NAME ? env.DB_NAME : "";
  private readonly type: string = env.DB_TYPE ? env.DB_TYPE : "mysql";

  constructor() {
    config();
  }

  public newDataSource(): DataSource {
    const dataSource = new DataSource({
      type: this.type,
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.database,
      entities: [Product],
    } as DataSourceOptions);

    return dataSource;
  }
}

export default Database;
