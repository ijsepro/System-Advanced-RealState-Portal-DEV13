import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ResetPasswordService {

    private url = 'http://localhost/MyServer/Edifices/index.php/admin/updatePassword';

    constructor(private http: Http) {

    }

    updatePassword(formdata) {
        return this.http.post(this.url, formdata);
    }

}
