import { HttpClientModule } from '@angular/common/http';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TestCaseType } from 'src/app/types';
import { TestcaseTypeComponent } from './testcase-type.component';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
    (key) => antDesignIcons[key]
);

describe('testcase-type.component.cy.ts', () => {
    it('playground', () => {
        const testCase = new FormGroup({
            type: new FormControl(TestCaseType.Smoke, Validators.required),
        });

        cy.mount(
            '<form [formGroup]="testCase"><testcase-type formControlName="type"></testcase-type></form>',
            {
                declarations: [TestcaseTypeComponent],
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
                providers: [
                    { provide: NZ_I18N, useValue: en_US },
                    { provide: NZ_ICONS, useValue: icons },
                ],
                componentProperties: {
                    testCase: testCase,
                },
            }
        );

        cy.get('#select_test_type').should('contains.text', 'Smoke');
        cy.get('#select_test_type').type(`Functional{enter}`);
        cy.get('#select_test_type').should('contains.text', 'Functional');
    });
});
