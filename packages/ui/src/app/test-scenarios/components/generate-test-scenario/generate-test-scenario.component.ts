import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestScenariosGeneratorService } from '../../services/test-scenarios-generator.service';

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

    constructor(
		private fb: FormBuilder, 
		private http: HttpClient,
		private testScenariosGenerator: TestScenariosGeneratorService
	) {}

    ngOnInit(): void {}

    onSubmit() {
		var acceptanceCriteria = this.inputData.controls['acceptanceCriteria'].value
		if (acceptanceCriteria) {
			this.testScenarios = this.testScenariosGenerator.generate(acceptanceCriteria);
		}		
    }
}
