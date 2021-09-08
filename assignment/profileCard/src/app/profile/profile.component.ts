import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public Facebook:any;
  public Instagram:any;
  public WhatsApp:any;
  public Name:any;
  public LinkedIn:any;



  constructor() {
    this.Facebook="";
    this.Instagram="";
    this.LinkedIn="";
    this.Name="";
    this.WhatsApp="";

  }


  ngOnInit() {
    this.Facebook= localStorage.getItem("Facebook");
    this.Instagram=localStorage.getItem("Instagram");
    this.LinkedIn=localStorage.getItem("LinkedIn");
    this.Name=localStorage.getItem("Name");
    this.WhatsApp=localStorage.getItem("WhatsApp");
  }

}
