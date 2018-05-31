import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private url = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/user_login';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: Http,private router: Router) {
  }

  login(credentials) {
    return this.http.post(this.url, credentials).map(response => {
      if ((response.json()).success) {
        return true;
      } else {
        return false;
      }
    });
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }


  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedI1n', 'true');
  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

}
