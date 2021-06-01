import { Component, OnInit } from '@angular/core';
import { User } from '../../../user/objects/User';
import { UserService } from '../../../../service/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.GetAll();       
  }  

  async GetAll(){
    this.users = await this.userService.GetAll();    
  }
  
}
