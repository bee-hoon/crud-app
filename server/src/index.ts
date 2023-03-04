import express, { Request, Response } from "express";
import config from "./config";

import "reflect-metadata";

const app = express();

app.all("*", (_: Request, response: Response): void => {
  response.status(404).json({
    status: false,
    message: "request not supported",
    data: null,
  });
});

app.listen(config.port, async () =>
  console.log(`server started on port ${config.port}`)
);
