import "reflect-metadata"
import request from 'supertest';
import app from './app';
import { describe, jest, beforeAll, expect, test } from '@jest/globals';
import { AppDataSource } from '../../src/services/persistence/app-data-source';
import { decorate, injectable } from 'inversify';
import { TestCaseBuilder } from "../../src/entities/builders/test-case.builder";
import { cleanUpMetadata } from "inversify-express-utils/lib/utils";

decorate(injectable(), AppDataSource);
jest.mock("../../src/services/persistence/app-data-source");

describe('Test Case', () => {
    let saveDatasourceSpy;

    beforeAll(() => {
        saveDatasourceSpy = jest.spyOn(AppDataSource.prototype, 'save')
            .mockImplementation((entity) => Promise.resolve(entity));
    });

    describe('Create', () => {
        test('When the test case is valid should return 200', async () => {
            // Given
            const testCase = new TestCaseBuilder()
                .randomTestData()
                .build()

            // When
            const server = app.build()

            // Then
            await request(server)
                .post('/testcase')
                .send(testCase)
                .expect(201);
            expect(saveDatasourceSpy).toHaveBeenNthCalledWith(1, testCase);
        });

        const cases = [
            {},
            { "descriptionn": "invalid property" },
            { "description": "ok", "type": "InvalidType" },
            { "description": "ok", "type": "Acceptance", "priority": "InvalidPriority" },
        ];
        test.each(cases)('When the test case is invalid should return 400: %j', async (jsonInput) => {
            // When
            const server = app.build()

            // Then
            await request(server)
                .post('/testcase')
                .send(jsonInput)
                .expect(400);
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanUpMetadata();
    });
});