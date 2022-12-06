import { TestCaseType, TestCasePriority } from "src/app/types";

export class TestCase {
    id?: string;
    description?: string;
    name!: string;
    type!: TestCaseType;
    priority!: TestCasePriority;
}
