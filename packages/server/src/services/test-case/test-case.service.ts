import { inject, injectable } from 'inversify';
import TYPES from '../../types';
import { TestCase } from '../../entities/test-case.entity';
import { AppDataSource } from '../persistence/app-data-source';
import Ajv from 'ajv';
import { ValidationError } from '../../entities/exceptions/validation.error';
import testCaseSchema from '../../schemas/test-case.schema.json';

const ajv = new Ajv({ allErrors: true });
//eslint-disable-next-line @typescript-eslint/no-var-requires
require('ajv-errors')(ajv /*, {singleError: true} */);
const validate = ajv.compile(testCaseSchema);

export interface ITestCaseService {
    save(testcase: TestCase): Promise<TestCase>;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    validateAndParse(data: any): TestCase;
}

@injectable()
export class TestCaseService implements ITestCaseService {
    private appDataSource: AppDataSource;

    constructor(@inject(TYPES.AppDataSource) appDataSource: AppDataSource) {
        this.appDataSource = appDataSource;
    }

    public async save(testcase: TestCase): Promise<TestCase> {
        return this.appDataSource.save<TestCase>(testcase);
    }

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    public validateAndParse(data: any): TestCase {
        const valid = validate(data);
        if (valid) {
            const testCase = new TestCase();

            Object.assign(testCase, data);

            return testCase;
        } else {
            throw new ValidationError(
                'Invalid Data: ',
                validate.errors.flatMap((e) => e.message)
            );
        }
    }
}
