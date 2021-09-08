import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  setToStorage(data: string){
    localStorage.setItem("data",data)
  }
  constructor() { }

}
