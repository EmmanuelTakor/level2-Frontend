import { Component, OnInit } from '@angular/core';


const USERS= [{name:"Thierry",age: 24,level:1},{name:"Ted",age: 14,level:2},{name:"Zef",age: 34,level:4},{name:"Milan",age: 28,level:8},{name:"Nelly",age: 44,level:6}]


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
  users:any=[];
  constructor() { }



  ngOnInit(): void {
    this.users = USERS;
  }

}
