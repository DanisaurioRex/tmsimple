import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTestScenarioComponent } from './generate-test-scenario.component';

describe('GenerateTestScenarioComponent', () => {
  let component: GenerateTestScenarioComponent;
  let fixture: ComponentFixture<GenerateTestScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTestScenarioComponent ]
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
