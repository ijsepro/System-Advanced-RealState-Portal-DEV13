import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ForgetPasswordService {

    private url = 'http://localhost/MyServer/AREP-New/index.php/user/sendMail';

    constructor(private http: Http) {

    }

    sendMail(emaill) {
        return this.http.post(this.url + '/' + emaill,emaill);
    }

}
