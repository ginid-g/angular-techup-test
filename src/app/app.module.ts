import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent, CustomerFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxSelectModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
