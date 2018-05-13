import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class UserRegistrationService {

  constructor(private http: Http) {
  }

  registerUser(formdata) {
    return this.http.post('http://localhost/BackEnd/Edifices/BackEnd/index.php/user/registerNewUser', formdata);
  }
}
