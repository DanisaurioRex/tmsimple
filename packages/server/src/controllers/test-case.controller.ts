import * as express from "express";
import TYPE from "../types";
import { ITestCaseService } from "../services/test-case/test-case.service";
import { inject } from "inversify";
import { TestCase } from "../entities/test-case.entity";
import {
  controller,
  httpPost,
  request,
  response,
  interfaces,
} from "inversify-express-utils";

@controller("/testcase")
export class TestCaseController implements interfaces.Controller {
  private readonly testCaseService: ITestCaseService;

  constructor(@inject(TYPE.TestCaseService) testCaseService: ITestCaseService) {
    this.testCaseService = testCaseService;
  }

  @httpPost("/")
  public async create(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
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
