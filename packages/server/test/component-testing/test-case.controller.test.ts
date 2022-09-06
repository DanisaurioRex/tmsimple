import "reflect-metadata";
import { beforeAll, describe, expect, jest, test } from "@jest/globals";
import { decorate, injectable } from "inversify";
import { AppDataSource } from "../../src/services/persistence/app-data-source";
import { TestCaseBuilder } from "../../src/entities/builders/test-case.builder";
import app from "./app";
import { cleanUpMetadata } from "inversify-express-utils/lib/utils";
import request from "supertest";

decorate(injectable(), AppDataSource);
jest.mock("../../src/services/persistence/app-data-source");

describe("Test Case", () => {
  let saveDatasourceSpy;

  beforeAll(() => {
    saveDatasourceSpy = jest
      .spyOn(AppDataSource.prototype, "save")
      .mockImplementation((entity) => Promise.resolve(entity));
  });

  describe("Create", () => {
    test("When the test case is valid should return 200", async () => {
      // Given
      const testCase = new TestCaseBuilder().randomTestData().build();

      // When
      const server = app.build();

      // Then
      await request(server).post("/testcase").send(testCase).expect(201);
      expect(saveDatasourceSpy).toHaveBeenNthCalledWith(1, testCase);
    });

    const cases = [
      {},
      { descriptionn: "invalid property" },
      { description: "ok", type: "InvalidType" },
      { description: "ok", priority: "InvalidPriority" },
    ];
    test.each(cases)(
      "When the test case is invalid should return 400",
      async (jsonInput) => {
        // When
        const server = app.build();

        // Then
        await request(server).post("/testcase").send(jsonInput).expect(400);
      }
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanUpMetadata();
  });
});
