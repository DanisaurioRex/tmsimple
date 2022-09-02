import "reflect-metadata"
import request from 'supertest';
import app from './app';
import { describe, jest, beforeAll, expect } from '@jest/globals';
import { AppDataSource } from '../../src/services/persistence/app-data-source';
import { decorate, injectable } from 'inversify';
import { TestCase } from "../../src/entities/test-case.entity";

decorate(injectable(), AppDataSource);
jest.mock("../../src/services/persistence/app-data-source");

describe('Test Case', () => {
    let saveDatasourceSpy;
    beforeAll(() => {
        saveDatasourceSpy = jest.spyOn(AppDataSource.prototype, 'save')
            .mockImplementation((entity) => Promise.resolve(entity));
    });

    describe('Create', () => {
        test('should create a test case', async () => {
            // Given
            const testCase: TestCase = {
                description: "component test description",
                precondition: "component test precondition"
            }

            // When
            const server = app.build()

            // Then
            await request(server)
                .post('/testcase')
                .send(testCase)
                .expect(201, testCase);
            expect(saveDatasourceSpy).toHaveBeenNthCalledWith(1, testCase);
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });
    });
});