import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fakeTestCaseType } from '../../../fake-data';
import { TestCasePriority, TestCaseType } from '../../../types';
import { TestCase } from '../../models/testcase.model';
import { TestcaseService } from '../../services/testcase.service';

@Component({
    selector: 'app-create-testcase',
    templateUrl: './create-testcase.component.html',
    styleUrls: ['./create-testcase.component.css'],
})
export class CreateTestcaseComponent implements OnInit {
    testCaseTypesList: TestCaseType[] = [];

    testCase = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        type: [TestCaseType.Functional, Validators.required],
        priority: [TestCasePriority.Medium, Validators.required],
    });

    constructor(private fb: FormBuilder, private testcaseService: TestcaseService) {}

    ngOnInit(): void {
        this.testCaseTypesList = fakeTestCaseType;
    }

    onSubmit() {
        this.testcaseService.create(this.testCase.value as TestCase)
			.subscribe({
                next: (data) => {
                    console.log('ok');
                }
            });
    }
}
