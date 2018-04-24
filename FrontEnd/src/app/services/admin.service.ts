import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AdminService {
    private url = 'http://localhost/BackEnd/AREP/admin/insert/';

    constructor(private http: Http) {
    }

    registerAdmin(formdata) {
        return this.http.post(this.url, formdata);
    }

    sendEmail(formdata) {
        return this.http.post('http://localhost/BackEnd/Edifices/Backend/index.php/admin/sendEmail', formdata);
    }
}
