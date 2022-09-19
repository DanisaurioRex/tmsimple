export const TestCaseType = {
	ACCEPTANCE: 'Acceptance',
	AUTOMATION: 'Automation',
	FUNTIONAL: 'Funtional',
	REGRESSION: 'Regression',
	SMOKE: 'Smoke',
};

export const IssueType = {
	TASK: 'task',
	BUG: 'bug',
	STORY: 'story',
};

export const TestCaseStatus = {
	BACKLOG: 'backlog',
	SELECTED: 'selected',
	INPROGRESS: 'inprogress',
	DONE: 'done',
};

export const TestCasePriority = {
	CRITICAL: 'Critical',
	HIGH: 'High',
	MEDIUM: 'Medium',
	LOW: 'Low',
	LOWEST: 'Lowest',
};

export const IssueTypeCopy = {
	[TestCaseType.TASK]: 'Task',
	[TestCaseType.BUG]: 'Bug',
	[TestCaseType.STORY]: 'Story',
};

export const TestCaseTypeCopy = {
	[TestCaseType.ACCEPTANCE]: 'Acceptance',
	[TestCaseType.AUTOMATION]: 'Automation',
	[TestCaseType.FUNTIONAL]: 'Funtional',
	[TestCaseType.REGRESSION]: 'Regression',
	[TestCaseType.SMOKE]: 'Smoke',
};

export const TestCaseStatusCopy = {
	[TestCaseStatus.BACKLOG]: 'Backlog',
	[TestCaseStatus.SELECTED]: 'Selected for development',
	[TestCaseStatus.INPROGRESS]: 'In progress',
	[TestCaseStatus.DONE]: 'Done',
};

export const TestCasePriorityCopy = {
	[TestCasePriority.CRITICAL]: 'Critical',
	[TestCasePriority.HIGH]: 'High',
	[TestCasePriority.MEDIUM]: 'Medium',
	[TestCasePriority.LOW]: 'Low',
	[TestCasePriority.LOWEST]: 'Lowest',
};
