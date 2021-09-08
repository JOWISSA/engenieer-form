import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormContainerModule } from './form/form.module'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';





@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormContainerModule
    // NzButtonModule
    
  ],
  providers: [
    [
      { provide: NZ_I18N, useValue: en_US }
    ]
  ],
  bootstrap: [AppComponent]


})
export class AppModule { }






