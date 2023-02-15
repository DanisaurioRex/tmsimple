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
    isLoading = false;
	isLoaded = false;

    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        private testScenariosGenerator: TestScenariosGeneratorService
    ) {}

    ngOnInit(): void {}

    async onSubmit() {
        this.isLoading = true;

        try {
            var acceptanceCriteria =
                this.inputData.controls['acceptanceCriteria'].value;
            if (acceptanceCriteria) {
                this.testScenarios = await this.testScenariosGenerator.generate(
                    acceptanceCriteria
                );
            }
        } finally {
            this.isLoading = false;
			this.isLoaded = true;
        }
    }
}
