import * as express from "express";
import { TestCaseService } from '../services/test-case/test-case.service';
import TYPE from '../constant/types';
import { inject } from 'inversify';
import { TestCase } from '../entity/test-case.entity';
import { controller, httpPost, request, response } from "inversify-express-utils";

@controller("/testcase")
export class TestCaseController {
    private readonly testCaseService: TestCaseService;

    constructor(
        @inject(TYPE.TestCaseService) testCaseService: TestCaseService
    ) {
        this.testCaseService = testCaseService;
    }

    @httpPost('/')
    private async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            const testCase = new TestCase();
            Object.assign(testCase, req.body);

            const createdTestCase = await this.testCaseService.create(testCase);

            res.status(201).json(createdTestCase).send();
        } catch (err) {
            res.status(400).json({ error: err.message }).send();
        }
    }
}