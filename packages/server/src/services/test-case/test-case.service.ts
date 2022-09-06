import { inject, injectable } from 'inversify';
import TYPES from '../../types';
import { TestCase } from '../../entities/test-case.entity';
import { AppDataSource } from '../persistence/app-data-source';
import Ajv from "ajv"
import { ValidationError } from '../../entities/exceptions/validation.error';

const testCaseSchema = require('../../schemas/test-case.schema.json')
const ajv = new Ajv()
const validate = ajv.compile(testCaseSchema)

export interface ITestCaseService {
    save(testcase: TestCase): Promise<TestCase>
    validateAndParse(data: any): TestCase
}

@injectable()
export class TestCaseService implements ITestCaseService {
    private appDataSource: AppDataSource;

    constructor(
        @inject(TYPES.AppDataSource) appDataSource: AppDataSource
    ) {
        this.appDataSource = appDataSource;
    }

    public async save(testcase: TestCase): Promise<TestCase> {
        try {
            return this.appDataSource.save<TestCase>(testcase);
        } catch (error) {
            throw error;
        }
    }

    public validateAndParse(data: any): TestCase {
        const valid = validate(data)
        if (valid) {

            const testCase = new TestCase();

            Object.assign(testCase, data);

            return testCase;
        } else {
            throw new ValidationError("Invalid Data", validate.errors)
        }
    }
}