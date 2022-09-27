import { faker } from '@faker-js/faker';

describe('Test Case UI', () => {
    const createTestCases = [];
    it('Create a Test Case', () => {
        cy.intercept('/testcase').as('createTestCase');
        const document = {
            name: faker.lorem.sentence(10),
            description: faker.lorem.sentences(2),
            type: 'Acceptance',
            priority: 'Low',
        };

        cy.visit('');

        cy.getBySel('input_name').type(document.name);
        cy.getBySel('input_description').type(document.description);
        cy.getBySel('select_test_type').click();
        cy.getBySel('select_test_type_input_search').type(
            `${document.type}{enter}`
        );
        cy.getBySel('select_test_priority').type(`${document.priority}{enter}`);
        cy.getBySel('button_submit').click();

        cy.wait('@createTestCase');

        cy.validateTestCase(document);

        createTestCases.push(document);
    });

    afterEach(() => {
        cy.deleteTestCases(createTestCases);
    });
});
