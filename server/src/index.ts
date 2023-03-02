import express, { Request, Response } from "express";
import config from "./config";

import Database from "./core/Database";

import Product from "./entity/Product";

const app = express();

app.all("*", (_: Request, response: Response): void => {
  response.status(404).json({
    status: false,
    message: "request not supported",
    data: null,
  });
});

app.listen(config.port, async () => {
  const database = new Database();

  try {
    await database.newDataSource();

    const products = await database.getdataSource()?.manager.find(Product);

    console.log(products);
  } catch (error) {
    console.log(error);
  }

  console.log(`server started on port ${config.port}`);
});
