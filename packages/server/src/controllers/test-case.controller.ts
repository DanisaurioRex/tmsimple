import * as express from 'express';
import TYPE from '../types';
import { ITestCaseService } from '../services/test-case/test-case.service';
import { inject } from 'inversify';
import {
    controller,
    httpPost,
    interfaces,
    request,
    response,
} from 'inversify-express-utils';
import { ValidationError } from '../entities/exceptions/validation.error';

@controller('/testcase')
export class TestCaseController implements interfaces.Controller {
    private readonly testCaseService: ITestCaseService;

    constructor(
        @inject(TYPE.TestCaseService) testCaseService: ITestCaseService
    ) {
        this.testCaseService = testCaseService;
    }

    @httpPost('/')
    public async create(
        @request() req: express.Request,
        @response() res: express.Response
    ) {
        try {
            const testCase = this.testCaseService.validateAndParse(req.body);
            const createdTestCase = await this.testCaseService.save(testCase);

            res.status(201).json(createdTestCase).send();
        } catch (err) {
            if (err.name == ValidationError.Name) {
                const validationError = err as ValidationError;
                res.status(400)
                    .json({ errors: validationError.errorMessages })
                    .send();
            } else {
                res.status(500).json({ error: err.message }).send();
            }
        }
    }
}
