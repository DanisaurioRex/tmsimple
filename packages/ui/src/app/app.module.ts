import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateTestcaseComponent } from './testcases/components/create-testcase/create-testcase.component';
import { TestcasePriorityComponent } from './testcases/components/testcase-priority/testcase-priority.component';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { TestcaseTypeComponent } from './testcases/components/testcase-type/testcase-type.component';
import { GenerateTestScenarioComponent } from './test-scenarios/components/generate-test-scenario/generate-test-scenario.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
    (key) => antDesignIcons[key]
);

@NgModule({
    declarations: [
        AppComponent,
        CreateTestcaseComponent,
        TestcasePriorityComponent,
        TestcaseTypeComponent,
        GenerateTestScenarioComponent,
    ],
    imports: [
        NzIconModule,
        NzButtonModule,
        NzInputModule,
        NzSelectModule,
		NzListModule,
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
    bootstrap: [AppComponent],
})
export class AppModule {}
