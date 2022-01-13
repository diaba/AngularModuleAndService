import { Injectable } from '@angular/core';
// Decorator of service
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserName():string { return 'Link';}
}
