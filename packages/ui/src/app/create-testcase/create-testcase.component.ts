import { Component, OnInit } from '@angular/core';
import { fakeTestCasePriority, fakeTestCaseType } from '../fake-data';
import { TestCasePriority, TestCaseType } from '../types';

@Component({
    selector: 'app-create-testcase',
    templateUrl: './create-testcase.component.html',
    styleUrls: ['./create-testcase.component.css'],
})
export class CreateTestcaseComponent implements OnInit {
	testCaseTypesList: TestCaseType[] = [];
	testCasePriorityList: TestCasePriority[] = [];

    constructor() {}

    ngOnInit(): void {
		this.testCaseTypesList = fakeTestCaseType;
		this.testCasePriorityList = fakeTestCasePriority;
	}
}
