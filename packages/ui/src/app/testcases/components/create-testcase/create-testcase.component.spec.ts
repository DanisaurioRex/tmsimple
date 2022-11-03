import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TestcasePriorityComponent } from '../testcase-priority/testcase-priority.component';
import { TestcaseTypeComponent } from '../testcase-type/testcase-type.component';

import { CreateTestcaseComponent } from './create-testcase.component';

describe('CreateTestcaseComponent', () => {
    let component: CreateTestcaseComponent;
    let fixture: ComponentFixture<CreateTestcaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CreateTestcaseComponent,
                TestcasePriorityComponent,
                TestcaseTypeComponent,
            ],
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
        }).compileComponents();

        fixture = TestBed.createComponent(CreateTestcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
