import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private url = 'http://localhost/BackEnd/Edifices/Admin/BackEnd/index.php/login';
    private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

    constructor(private http: Http) {
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
    }


    setLoggedIn(value: boolean) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
    }

    isLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    }

}
