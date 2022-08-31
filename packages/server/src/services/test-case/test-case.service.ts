import { inject, injectable } from 'inversify';
import TYPES from '../../constant/types';
import { TestCase } from '../../entity/test-case.entity';
import { AppDataSource } from '../persistence/app-data-source';

@injectable()
export class TestCaseService {
    private appDataSource: AppDataSource;

    constructor(
        @inject(TYPES.AppDataSource) appDataSource: AppDataSource
    ) {
        this.appDataSource = appDataSource;
    }

    public async create(testcase: TestCase): Promise<TestCase> {
        try {
            return this.appDataSource.Manager.save<TestCase>(testcase);
        } catch (error) {
            // debug error
            throw error;
        }
    }
}