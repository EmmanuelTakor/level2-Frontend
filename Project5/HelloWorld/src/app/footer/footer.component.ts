import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() person:any;


   header= "how are yoy?"



   log(){
    alert("hey!")
  }


  constructor() {
   }


  ngOnInit(): void {
  }

}
