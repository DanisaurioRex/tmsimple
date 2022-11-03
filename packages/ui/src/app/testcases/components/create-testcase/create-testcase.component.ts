import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fakeTestCaseType } from '../../../fake-data';
import { TestCasePriority, TestCaseType } from '../../../types';

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

    constructor(private fb: FormBuilder, private http: HttpClient) {}

    ngOnInit(): void {
        this.testCaseTypesList = fakeTestCaseType;
    }

    onSubmit() {
        this.http
            .post('http://localhost:3000/testcase', this.testCase.value)
            .subscribe({
                next: (data) => {
                    console.log('ok');
                    console.log(JSON.stringify(data, null, 2));
                },
                error: (error) => {
                    console.error('There was an error!', error);
                },
            });
    }
}
