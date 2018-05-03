import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConstructorOverviewService {

    constructor(private http: Http) {
    }

    getConstructors() {
        return this.http.get('http://localhost/BackEnd/Edifices/Admin/BackEnd/index.php/constructor/constructors');
    }

}
