import { DataSource, Repository } from "typeorm";

import ProductEntity from "../entity/Product";

async function initRepository(dataSource: DataSource): Promise<{
  Product: Repository<ProductEntity>;
}> {
  const connection = await dataSource.initialize();
  const result = await connection.query("SELECT 1 + 1");

  console.log(result);
  console.log("data source initialized");

  return {
    Product: connection.getRepository(ProductEntity),
  };
}

export default initRepository;
