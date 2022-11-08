import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestcaseComponent } from './create-testcase/create-testcase.component';

const routes: Routes = [
	{ path: 'testcases/new', component: CreateTestcaseComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
