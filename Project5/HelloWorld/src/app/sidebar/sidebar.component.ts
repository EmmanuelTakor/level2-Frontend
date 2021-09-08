import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {LoggingService  } from "../logging.service";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [LoggingService]
})
export class SidebarComponent implements OnInit {
  names=[{name: "James",belt:"blue"},{name:"Paul",belt:"black"},{name:"Micheal",belt:"red"},{name:"Takor",belt:"green"}]

  constructor(private logger:LoggingService ) {

  }
  logIt(){
    this.logger.log()
  }

  ngOnInit(): void {
    this.logger.fetchData()
  }

}
