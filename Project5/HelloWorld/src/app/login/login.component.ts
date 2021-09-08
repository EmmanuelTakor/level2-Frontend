import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username:string=""
  Password:string=""

  constructor(private router:Router) {

  }

  submitCredentials(){
  //  this.Username
  //  this.Password

  this.router.navigate(["/profile"])

  localStorage.setItem("Username", this.Username)
  localStorage.setItem("Password", this.Password)
  }



  ngOnInit(): void {
  }

}
