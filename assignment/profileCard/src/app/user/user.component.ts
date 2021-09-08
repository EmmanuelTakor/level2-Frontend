import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.setToStorage("Great!")
  }

}
