import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent implements OnInit {

  Instagram:string ="";
  Name:string="";
  WhatsApp:string="";
  Facebook:string="";
  LinkedIn:string="";



submitCredentials(){
  localStorage.setItem("WhatsApp", this.WhatsApp)
  localStorage.setItem("Name",this.Name)
  localStorage.setItem("Instagram", this.Instagram)
  localStorage.setItem("Facebook", this.Facebook)
  localStorage.setItem("LinkedIn", this.LinkedIn)
  this.router.navigate(["/profile"])
}


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
