import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowerService {

  show(){
    alert("I am the Shower!!!")
  }

  constructor() { }
}
