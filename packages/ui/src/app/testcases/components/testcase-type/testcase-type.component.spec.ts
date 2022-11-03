import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseTypeComponent } from './testcase-type.component';

describe('TestcaseTypeComponent', () => {
    let component: TestcaseTypeComponent;
    let fixture: ComponentFixture<TestcaseTypeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestcaseTypeComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestcaseTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
