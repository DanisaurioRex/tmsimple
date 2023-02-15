import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateTestScenarioComponent } from './test-scenarios/components/generate-test-scenario/generate-test-scenario.component';
import { CreateTestcaseComponent } from './testcases/components/create-testcase/create-testcase.component';

const routes: Routes = [
    {
        path: 'testcases/new',
        component: CreateTestcaseComponent,
    },
	{
        path: 'testscenarios/generate',
        component: GenerateTestScenarioComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
