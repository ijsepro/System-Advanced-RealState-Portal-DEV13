import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AdminService {
    private url = 'http://localhost/BackEnd/AREP/admin/insert/';

    // private admin: Admin;

    constructor(private http: Http) {
    }

    registerAdmin(formdata) {
        // return this.http.post(this.url + '/' + admin['name'] + '/' + admin['email'] + '/' + admin['password'], admin);
        // return this.http.post(this.url, formdata);
    }

    public uploadImage(formdata: any) {
        return this.http.post('http://localhost/BackEnd/AREP/admin/uploadImage/', formdata);
    }
}
