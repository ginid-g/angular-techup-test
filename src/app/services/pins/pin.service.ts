import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface Pin {
  id?: string;
  title: string;
  image: string;
  collaborator: [string];
  privacy: 'private' | 'public';
}

@Injectable({
  providedIn: 'root',
})
export class PinService {
  pins: BehaviorSubject<Pin[]> = new BehaviorSubject(this.getPins());

  constructor() {}

  save(pin: Pin) {
    const pins = this.getPins();
    pin.id = uuidv4();
    pins.push(pin);
    localStorage.setItem('pins', JSON.stringify(pins));
    this.pins.next(pins);
  }

  getPins(): Pin[] {
    const pin = localStorage.getItem('pins');

    if (pin) {
      return JSON.parse(pin);
    }

    return [];
  }
}
