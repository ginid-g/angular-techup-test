import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegionService } from '../../services/regions/region.service';
import { CustomerService } from '../../services/customers/customer.service';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  providers: [RegionService, CustomerService],
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  regions: any[] = [];

  constructor(
    private regionService: RegionService,
    private customerService: CustomerService,
    private modalRef: BsModalRef
  ) {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      region: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regions = this.regionService.getRegions();
  }

  onRegionSelect(event: string) {
    const ele = this.regions.find((region) => region.id === event);
    if (ele) {
      this.customerForm.patchValue({
        country: ele.country,
      });
    }
  }

  save() {
    this.customerService.save(this.customerForm.value);
    this.close();
  }

  close() {
    this.modalRef.hide();
  }
}
