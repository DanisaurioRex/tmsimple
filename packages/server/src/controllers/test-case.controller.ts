import * as express from "express";
import TYPE from '../types';
import { ITestCaseService } from '../services/test-case/test-case.service';
import { inject } from 'inversify';
import { TestCase } from '../entities/test-case.entity';
import { controller, httpPost, request, response, interfaces } from "inversify-express-utils";
import { ValidationError } from "../entities/exceptions/validation.error";
import Ajv from "ajv"


const testCaseSchema = require('../schemas/test-case.schema.json')
const ajv = new Ajv()
const validate = ajv.compile(testCaseSchema)

@controller("/testcase")
export class TestCaseController implements interfaces.Controller {
    private readonly testCaseService: ITestCaseService;

    constructor(
        @inject(TYPE.TestCaseService) testCaseService: ITestCaseService
    ) {
        this.testCaseService = testCaseService;
    }

    @httpPost('/')
    public async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            const testCase = this.validateAndSetData(req.body);

            const createdTestCase = await this.testCaseService.create(testCase);

            res.status(201).json(createdTestCase).send();
        } catch (err) {
            console.debug(JSON.stringify(err, null, 2))
            if (err.name == 'ValidationError') {
                res.status(400).json({ error: err.message }).send();
            } else {
                res.status(500).json({ error: err.message }).send();
            }

        }
    }

    private validateAndSetData(data): TestCase {
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

