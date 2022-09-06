import { inject, injectable } from "inversify";
import TYPES from "../../types";
import { TestCase } from "../../entities/test-case.entity";
import { AppDataSource } from "../persistence/app-data-source";

export interface ITestCaseService {
  create(testcase: TestCase): Promise<TestCase>;
}

@injectable()
export class TestCaseService implements ITestCaseService {
  private appDataSource: AppDataSource;

  constructor(@inject(TYPES.AppDataSource) appDataSource: AppDataSource) {
    this.appDataSource = appDataSource;
  }

  public async create(testcase: TestCase): Promise<TestCase> {
    return this.appDataSource.save<TestCase>(testcase);
  }
}
