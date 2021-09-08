import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  displayFull:boolean= false;
  displayCyb:boolean= false;
  displayDig:boolean= false;


  constructor() { }

  ngOnInit(): void {
  }
  showFullStack(){
    this.displayFull=!this.displayFull;
    this.displayCyb = false;
    this.displayDig =false;
  }

  showCyberSecurity(){
    this.displayCyb=!this.displayCyb;
    this.displayFull = false;
    this.displayDig =false;
  }
  showDigitalMarketing(){
    this.displayDig=!this.displayDig;
    this.displayCyb = false;
    this.displayFull =false;
  }
}
