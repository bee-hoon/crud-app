import express, { Request, Response } from "express";
import config from "./config";

import Database from "./core/Database";

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

  database.newDataSource();

  // initialize db
  try {
    await database.getdataSource()?.initialize();

    if (!database.getdataSource() && database.getdataSource()?.isInitialized) {
      console.log(`database initialized`);
    }
  } catch (error) {
    console.log(error);
  }

  console.log(`server started on port ${config.port}`);
});
