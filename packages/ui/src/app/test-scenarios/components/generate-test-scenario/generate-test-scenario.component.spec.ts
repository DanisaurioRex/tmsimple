import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { GenerateTestScenarioComponent } from './generate-test-scenario.component';

describe('GenerateTestScenarioComponent', () => {
  let component: GenerateTestScenarioComponent;
  let fixture: ComponentFixture<GenerateTestScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTestScenarioComponent ],
	  imports: [
		NzIconModule,
		NzButtonModule,
		NzInputModule,
		NzSelectModule,
		ReactiveFormsModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
	],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateTestScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
