import { Container } from 'inversify';
import TYPES from './types';
import { TestCaseController } from './controllers/test-case.controller';
import { AppDataSource } from './services/persistence/app-data-source';
import {
    ITestCaseService,
    TestCaseService,
} from './services/test-case/test-case.service';

const container = new Container();

container.bind<AppDataSource>(TYPES.AppDataSource).to(AppDataSource)
    .inSingletonScope;
container.bind<ITestCaseService>(TYPES.TestCaseService).to(TestCaseService);
container
    .bind<TestCaseController>(TYPES.TestCaseController)
    .to(TestCaseController);

export default container;
