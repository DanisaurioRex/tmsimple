import { TestCase } from '../test-case.entity';
import { faker } from '@faker-js/faker';
import { TestCaseType } from '../test-case-type.entity';
import { TestCasePriority } from '../test-case-priority.entity';

export class TestCaseBuilder {
    private readonly testcase: TestCase;

    constructor() {
        this.testcase = new TestCase();
    }

    public id(id: string): TestCaseBuilder {
        this.testcase.id = id;
        return this;
    }

    public name(name: string): TestCaseBuilder {
        this.testcase.name = name;
        return this;
    }

    public type(type: TestCaseType): TestCaseBuilder {
        this.testcase.type = type;
        return this;
    }

    public priority(priority: TestCasePriority): TestCaseBuilder {
        this.testcase.priority = priority;
        return this;
    }

    public description(description: string): TestCaseBuilder {
        this.testcase.description = description;
        return this;
    }

    public precondition(precondition: string): TestCaseBuilder {
        this.testcase.precondition = precondition;
        return this;
    }

    public randomTestData(): TestCaseBuilder {
        this.id(faker.database.mongodbObjectId());
        this.name(faker.lorem.sentence());
        this.description(faker.lorem.paragraph());
        this.precondition(faker.lorem.paragraph());
        this.type(this.getRandomEnumValue(TestCaseType));
        this.priority(this.getRandomEnumValue(TestCasePriority));
        return this;
    }

    public build(): TestCase {
        return this.testcase;
    }

    private getRandomEnumValue<T>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum) as Array<keyof T>;
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        const randomEnumKey = enumValues[randomIndex];
        return anEnum[randomEnumKey];
    }
}
