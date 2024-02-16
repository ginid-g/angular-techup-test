import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { PinService } from 'src/app/services/pins/pin.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss'],
})
export class PinFormComponent implements OnInit {
  pinForm: FormGroup;

  collaboratorItem: { id: string; text: string }[] = [];

  constructor(
    private customerService: CustomerService,
    private modalRef: BsModalRef,
    private pinService: PinService
  ) {
    this.pinForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      collaborator: new FormControl([], [Validators.required]),
      privacy: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    const customer = this.customerService.getCustomers();

    this.collaboratorItem = customer.map((res) => {
      return {
        id: res.name,
        text: res.name,
      };
    });
  }

  selectFile(file: string) {
    this.pinForm.patchValue({
      image: file,
    });
  }

  save() {
    this.pinService.save(this.pinForm.value);
    this.close();
  }

  close() {
    this.modalRef.hide();
  }
}
