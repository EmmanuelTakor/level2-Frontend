import { Component, OnInit } from '@angular/core';
import { AlerterService } from '../alerter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AlerterService]
})

export class NavbarComponent implements OnInit {

  header:string;
  gender:string;



  constructor(private alertBar: AlerterService){

    this.gender= "female"
    this.header=""




    if(this.gender === "female"){
      this.header = "Hello Madam,GoodEvening"
    }
    else if (this.gender== "male"){

      this.header = "Hello Sir,GoodMorning"
    }

    // this.gender =="female";
  }
  alertIT(){
    this.alertBar.alertFunction()
  }

  ngOnInit(): void {
  }

};
