import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PinFormComponent } from './components/pin-form/pin-form.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { PinListComponent } from './components/pin-list/pin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    PinFormComponent,
    FileUploadComponent,
    PinListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxSelectModule,
    ModalModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
