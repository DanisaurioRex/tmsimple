import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";
import TYPES from "./types";
import { AppDataSource } from "./services/persistence/app-data-source";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";

dotenv.config();

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});

const appDataSource = container.get<AppDataSource>(TYPES.AppDataSource);
appDataSource.initialize();

const app = server.build();
const port = process.env["PORT"];

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
