import "reflect-metadata"
import { describe, jest, expect } from '@jest/globals';
import { AppDataSource } from '../../../../src/services/persistence/app-data-source';
import { decorate, injectable } from 'inversify';
import { TestCaseService } from "../../../../src/services/test-case/test-case.service";
import { TestCaseBuilder } from "../../../../src/entities/builders/test-case.builder";

decorate(injectable(), AppDataSource);
jest.mock("../../../../src/services/persistence/app-data-source");

describe('Test Case', () => {
    describe('Create', () => {
        test('When the test case is valid  should create a test case', async () => {
            // Arrange
            const service = new TestCaseService(new AppDataSource());
            const testCase = new TestCaseBuilder().randomTestData().build();
            const saveDatasourceSpy = jest.spyOn(AppDataSource.prototype, 'save')
                .mockImplementation((entity) => Promise.resolve(entity));

            // Act
            service.create(testCase);

            // Assert
            expect(saveDatasourceSpy).toHaveBeenNthCalledWith(1, testCase);
        });

        test('When an error occurs while saving a test case should return an expection', async () => {
            // Arrange
            const error = new Error('DB ERROR');
            const service = new TestCaseService(new AppDataSource());
            const testCase = new TestCaseBuilder().randomTestData().build();
            jest.spyOn(AppDataSource.prototype, 'save')
                .mockImplementation(() => Promise.reject(error))

            // Act
            const result = () => service.create(testCase);

            // Assert
            await expect(result).rejects.toThrowError(error);
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});