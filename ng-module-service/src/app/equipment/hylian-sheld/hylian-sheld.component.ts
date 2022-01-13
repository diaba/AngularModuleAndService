import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-hylian-sheld',
  templateUrl: './hylian-sheld.component.html',
  styleUrls: ['./hylian-sheld.component.css']
})
export class HylianSheldComponent implements OnInit {
// my variable
hylian: string ;
userName: string ;

  constructor(private userService: UserService) {
    this.userName = this.userService.getUserName();
    this.hylian = 'Behold! The Hylian Shield!';
   }
 
  ngOnInit(): void {
  }

}
