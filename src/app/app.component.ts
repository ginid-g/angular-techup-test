import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { PinFormComponent } from './components/pin-form/pin-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BsModalService],
})
export class AppComponent {
  title = 'angular-techup-test';

  constructor(private modalService: BsModalService) {}

  addCustomer() {
    this.modalService.show(CustomerFormComponent, {});
  }

  addPin() {
    this.modalService.show(PinFormComponent);
  }
}
