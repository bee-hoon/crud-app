import express, { Request, Response } from "express";
import config from "./core/config";

const app = express();

app.all("*", (_: Request, response: Response): void => {
  response.status(404).json({
    status: false,
    message: "request not supported",
    data: null,
  });
});

app.listen(config.port, () =>
  console.log(`server started on port ${config.port}`)
);
