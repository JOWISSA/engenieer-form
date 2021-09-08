import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container/form-container.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    FormContainerComponent,
  ],
  exports: [
    FormContainerComponent,
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    NzFormModule
  ]
})
export class FormContainerModule { }
