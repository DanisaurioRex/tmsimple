import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestScenariosGeneratorService {

  constructor() { }

  public generate(acceptanceCriteria: string): string[] {
	return [];
  }
}
