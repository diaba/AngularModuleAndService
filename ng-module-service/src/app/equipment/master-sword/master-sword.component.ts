import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {
// create the variables for the view
proclamation: string = '';
userName: string;
  constructor(private userService: UserService) {
    this.proclamation = 'Behold! The Master Sword';
    this.userName = this.userService.getUserName();
   }

  ngOnInit(): void {
  }

}
