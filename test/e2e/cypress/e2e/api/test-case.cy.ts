import { faker } from '@faker-js/faker';

describe('Test Case API', () => {
    const createTestCases = [];
    it('Create a Test Case', () => {
        const document = {
            name: faker.lorem.sentence(10),
            description: faker.datatype.string(200),
            type: 'Acceptance',
            priority: 'Low',
        };

        cy.request('POST', 'testcase', document).should((response) => {
            const query = { description: response.body.description };

            cy.findOne(query, { collection: 'test_case' }).then(
                (result: any) => {
                    assert.isNotNull(result);
                    assert.isNotNull(result.id);
                    assert.strictEqual(
                        result.description,
                        document.description
                    );
                    assert.strictEqual(result.type, document.type);
                    assert.strictEqual(result.priority, document.priority);
                }
            );
        });

        createTestCases.push(document);
    });

    afterEach(() => {
        const query = {
            description: {
                $in: createTestCases.map((tc) => tc.description),
            },
        };

        cy.deleteMany(query, { collection: 'test_case' }).then((reponse) => {
            cy.log(reponse);
        });
    });
});
