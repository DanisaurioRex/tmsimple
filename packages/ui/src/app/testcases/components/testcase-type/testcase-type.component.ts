import { Component, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { fakeTestCaseType } from 'src/app/fake-data';
import { TestCaseType } from 'src/app/types';

@Component({
    selector: 'testcase-type',
    templateUrl: './testcase-type.component.html',
    styleUrls: ['./testcase-type.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: TestcaseTypeComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: TestcaseTypeComponent,
        },
    ],
})
export class TestcaseTypeComponent
    implements ControlValueAccessor, Validator, OnInit
{
    @Input() type!: TestCaseType;
    touched = false;
    disabled = false;

    testCaseTypeList: TestCaseType[] = [];
    testCaseTypeIcons!: {
        [key in TestCaseType]: { icon: string; color: string };
    };

    writeValue(type: TestCaseType) {
        this.type = type;
    }

    onChange = (type: TestCaseType) => {
        // Empty
    };

    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    onTouched = () => {
        // Empty
    };

    registerOnTouched(onTouched: any) {
        this.onTouched = onTouched;
    }

    setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

    ngOnInit(): void {
        this.testCaseTypeList = fakeTestCaseType;
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return null;
    }

    onTypeChange(value: any) {
        this.markAsTouched();
        this.onChange(value);
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    getIcon(issueType: TestCaseType) {
        return this.testCaseTypeIcons[issueType].icon;
    }

    getColor(issueType: TestCaseType) {
        return this.testCaseTypeIcons[issueType].color;
    }
}
