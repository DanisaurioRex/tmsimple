import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-generate-test-scenario',
    templateUrl: './generate-test-scenario.component.html',
    styleUrls: ['./generate-test-scenario.component.css'],
})
export class GenerateTestScenarioComponent {
    inputData = this.fb.group({
        acceptanceCriteria: ['', Validators.required],
    });
    testScenarios: string[] = [];

    constructor(private fb: FormBuilder, private http: HttpClient) {}

    ngOnInit(): void {}

    onSubmit() {
		this.testScenarios = [
			'Verify that the password recovery feature is available on the login page.',
			'Verify that the password recovery feature prompts the user to enter their email address.',
		];
        /*this.http
            .post('http://localhost:3000/chetgpt', this.inputData.value)
            .subscribe({
                next: (data) => {
                    console.log('ok');
                    console.log(JSON.stringify(data, null, 2));
                    
                },
                error: (error) => {
                    console.error('There was an error!', error);
                },
            });*/
    }
}
