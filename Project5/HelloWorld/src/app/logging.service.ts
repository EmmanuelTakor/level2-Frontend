import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(){
    console.log("I am the logger")
  }

  constructor(private http:HttpClient) { }
   fetchData(){
     return this.http.get('../../data').subscribe(
       (data)=> console.log(data)
     )
   }
}

