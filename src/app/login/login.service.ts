import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static login() {
    throw new Error('Method not implemented.');
  }

  isLoggedIn: boolean = false

  constructor() { }

  login(email: string, password: string) {
    if(email==="admin@gmail.com" && password=== "Admin"){
      this.isLoggedIn = true
      // this.route.navigateByUrl('/rooms/add')
    }
    return this.isLoggedIn
    
  }
}
