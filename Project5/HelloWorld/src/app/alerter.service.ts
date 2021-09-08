import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlerterService {

  alertFunction(){
    alert("I am the alerter")
  }

  constructor() {

  }
}
