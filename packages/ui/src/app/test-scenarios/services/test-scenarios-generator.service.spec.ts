import { TestBed } from '@angular/core/testing';

import { TestScenariosGeneratorService } from './test-scenarios-generator.service';

describe('GenerateTestScenarioService', () => {
  let service: TestScenariosGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestScenariosGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
