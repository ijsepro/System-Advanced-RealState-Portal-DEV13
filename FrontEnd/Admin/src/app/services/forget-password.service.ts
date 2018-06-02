import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ForgetPasswordService {

    private url = 'http://localhost/Backend/Edifices/BackEnd/index.php/admin/sendPasswordResetMail';

    constructor(private http: Http) {

    }

    sendPasswordResetMail(emaill) {
        return this.http.post(this.url + '/' + emaill,emaill);
    }

}
