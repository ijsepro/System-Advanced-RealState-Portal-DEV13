import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ForgetPasswordServiceService {

    private url = 'http://localhost/MyServer/AREP/index.php/user/sendMail';

    constructor(private http: Http) {

    }

    // getPosts() {
    //     return this.http.get(this.url);
    // }

    sendMail(emaill) {
        // return this.http.get(this.url);
        console.log(emaill);
        return this.http.post(this.url + '/' + emaill,emaill);
    }
}
