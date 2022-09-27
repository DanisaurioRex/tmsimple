/// <reference types="cypress" />
// eslint-disable no-namespace

declare global {
    namespace Cypress {
        interface Chainable {
            validateTestCase: (expectedTestCase: any) => void;
            getBySel: (selector: string) => Chainable<any>;
            deleteTestCases: (testCases: any[]) => void;
        }
    }
}

export function validateTestCase(expectedTestCase: any) {
    const query = { name: expectedTestCase.name };
    return cy
        .findOne(query, { collection: 'test_case' })
        .then((result: any) => {
            assert.isNotNull(result);
            assert.isNotNull(result.id);
            assert.include(result.description, expectedTestCase.description);
            assert.strictEqual(result.type, expectedTestCase.type);
            assert.strictEqual(result.priority, expectedTestCase.priority);
        });
}

export function getBySel(selector, ...args) {
    return cy.get(`[data-test=${selector}]`, ...args);
}

export function deleteTestCases(testCases) {
    const query = {
        name: {
            $in: testCases.map((tc) => tc.name),
        },
    };

    cy.deleteMany(query, { collection: 'test_case' }).then((reponse) => {
        cy.log(reponse);
    });
}

Cypress.Commands.add('validateTestCase', validateTestCase);
Cypress.Commands.add('getBySel', getBySel);
Cypress.Commands.add('deleteTestCases', deleteTestCases);
