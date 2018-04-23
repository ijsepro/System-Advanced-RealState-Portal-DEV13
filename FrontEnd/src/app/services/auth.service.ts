import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

    login(credentials) {
        // return this.http.post('/api/authenticate', JSON.stringify(credentials))
        //     .map(response => {
        //         const result = response.json();
        //
        //         if (result && result.token) {
        //             localStorage.setItem('token', result.token);
        //
        //             const jwt = new JwtHelper();
        //             this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
        //
        //             return true;
        //         }
        //         else return false;
        //     });
    }
}
