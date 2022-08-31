import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import dotenv from 'dotenv';
import "reflect-metadata"
import TYPES from './constant/types';
import { AppDataSource } from './services/persistence/app-data-source';
import { TestCaseService } from './services/test-case/test-case.service';
import { TestCaseController } from './controllers/test-case.controller';
import { InversifyExpressServer } from 'inversify-express-utils';

dotenv.config();

let container = new Container();

container.bind<AppDataSource>(TYPES.AppDataSource).to(AppDataSource).inSingletonScope;
container.bind<TestCaseService>(TYPES.TestCaseService).to(TestCaseService);

container.bind<TestCaseController>(TYPES.TestCaseController).to(TestCaseController);

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

const appDataSource = container.get<AppDataSource>(TYPES.AppDataSource);
appDataSource.initialize()

const app = server.build();
const port = process.env['PORT'];

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});