import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasePriorityComponent } from './testcase-priority.component';

describe('TestcasePriorityComponent', () => {
    let component: TestcasePriorityComponent;
    let fixture: ComponentFixture<TestcasePriorityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestcasePriorityComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestcasePriorityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
