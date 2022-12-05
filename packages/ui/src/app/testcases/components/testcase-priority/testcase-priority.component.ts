import { Component, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { fakeTestCasePriority } from 'src/app/fake-data';
import { TestCasePriority } from 'src/app/types';

@Component({
    selector: 'testcase-priority',
    templateUrl: './testcase-priority.component.html',
    styleUrls: ['./testcase-priority.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: TestcasePriorityComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: TestcasePriorityComponent,
        },
    ],
})
export class TestcasePriorityComponent
    implements ControlValueAccessor, Validator, OnInit
{
    @Input() priority!: TestCasePriority;
    touched = false;
    disabled = false;

    testCasePriorityList: TestCasePriority[] = [];
    testCasePriorityIcons!: {
        [key in TestCasePriority]: { icon: string; color: string };
    };

    writeValue(priority: TestCasePriority) {
        this.priority = priority;
    }

    onChange = (priority: TestCasePriority) => {
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
        this.testCasePriorityList = fakeTestCasePriority;
        this.testCasePriorityIcons = {
            [TestCasePriority.Critical]: {
                icon: 'up-circle',
                color: '#FF5630',
            },
            [TestCasePriority.High]: {
                icon: 'up-circle',
                color: '#FF8B00',
            },
            [TestCasePriority.Medium]: {
                icon: 'down-circle',
                color: '#FFAB00',
            },
            [TestCasePriority.Low]: {
                icon: 'up-circle',
                color: '#36B37E',
            },
        };
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return null;
    }

    onPriorityChange(value: any) {
        this.markAsTouched();
        this.onChange(value);
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    getIcon(issuePriority: TestCasePriority) {
        return this.testCasePriorityIcons[issuePriority].icon;
    }

    getColor(issuePriority: TestCasePriority) {
        return this.testCasePriorityIcons[issuePriority].color;
    }
}
