import 'reflect-metadata';
import { describe, expect, jest, test, afterEach } from '@jest/globals';
import { AppDataSource } from '../../../../src/services/persistence/app-data-source';
import { decorate, injectable } from 'inversify';
import { TestCaseService } from '../../../../src/services/test-case/test-case.service';
import { TestCaseBuilder } from '../../../../src/entities/builders/test-case.builder';
import { TestCase } from '../../../../src/entities/test-case.entity';

decorate(injectable(), AppDataSource);
jest.mock('../../../../src/services/persistence/app-data-source');

describe('Test Case', () => {
    describe('Create', () => {
        test('When the test case is valid  should create a test case', async () => {
            // Arrange
            const service = new TestCaseService(new AppDataSource());
            const testCase = new TestCaseBuilder().randomTestData().build();
            const saveDatasourceSpy = jest
                .spyOn(AppDataSource.prototype, 'save')
                .mockImplementation((entity) => Promise.resolve(entity));

            // Act
            service.save(testCase);

            // Assert
            expect(saveDatasourceSpy).toHaveBeenNthCalledWith(1, testCase);
        });

        test('When an error occurs while saving a test case should return an expection', async () => {
            // Arrange
            const error = new Error('DB ERROR');
            const service = new TestCaseService(new AppDataSource());
            const testCase = new TestCaseBuilder().randomTestData().build();
            const saveDatasourceSpy = jest
                .spyOn(AppDataSource.prototype, 'save')
                .mockImplementation(() => Promise.reject(error));

            // Act
            const result = () => service.save(testCase);

            // Assert
            expect(saveDatasourceSpy).not.toHaveBeenCalled();
            await expect(result).rejects.toThrowError(error);
        });
    });

    describe('Validate Data', () => {
        test('When the test case is valid should return a Test Case instance', () => {
            // Arrange
            const service = new TestCaseService(new AppDataSource());
            const jsonInput = {
                name: 'ok',
                description: 'ok',
                type: 'Acceptance',
                priority: 'Low',
            };

            // Act
            const result = service.validateAndParse(jsonInput);

            // Assert
            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(TestCase);
        });

        // prettier-ignore
        test.each([
            [{}, "must have required property 'description'"],
            [{}, "must have required property 'type'"],
            [{}, "must have required property 'priority'"],
            [{ xxx: 0 }, "should not have properties other than Test Case"],
            [{ type: 'InvalidType' }, "must be equal to one of the allowed values"],
            [{ priority: 'InvalidPriority' }, "must be equal to one of the allowed values"],
        ])(
            'When the test case is invalid (%s) should raise the error: \'%s\'',
            (jsonInput, expectedMessage) => {
                // Arrange
                const service = new TestCaseService(new AppDataSource());

                // Act
                let result = null;
                try {
                    service.validateAndParse(jsonInput);
                } catch (error) {
                    result = error;
                }

                // Assert
                expect(result).not.toBeNull();
                expect(result.errorMessages).toContain(expectedMessage);
            }
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});
