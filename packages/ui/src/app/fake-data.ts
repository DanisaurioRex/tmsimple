import { TestCasePriority, TestCaseType } from './types';

export const fakeTestCaseType: TestCaseType[] = [
    TestCaseType.Acceptance,
    TestCaseType.Automation,
    TestCaseType.Functional,
    TestCaseType.Regression,
    TestCaseType.Smoke,
];

export const fakeTestCasePriority: TestCasePriority[] = [
    TestCasePriority.Critical,
    TestCasePriority.High,
    TestCasePriority.Low,
    TestCasePriority.Medium,
];
