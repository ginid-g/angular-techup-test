import { Component, OnInit } from '@angular/core';
import { PinService } from 'src/app/services/pins/pin.service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss'],
})
export class PinListComponent {
  pins$ = this.pinService.pins;
  constructor(private pinService: PinService) {}
}
