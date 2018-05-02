import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConstructorProfileService {

    private url = 'http://localhost/MyServer/Edifices/index.php/constructor/getConstructor';

    constructor(private http: Http) {

    }

    getConstructor(cName) {
        return this.http.post(this.url + '/' + cName,cName);
    }
}
