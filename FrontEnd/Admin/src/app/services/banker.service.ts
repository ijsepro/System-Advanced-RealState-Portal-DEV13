import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BankerService {

    private getBankerUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/banker/getBanker';
    // private getWorksUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/work/getConstructorWorks';

    constructor(private http: Http) {

    }

    getBanker(bName) {
        return this.http.post(this.getBankerUrl + '/' + bName, bName);
    }

    // getConstructorWorks(conid) {
    //     return this.http.post(this.getWorksUrl + '/' + conid, conid);
    // }

    getBankers() {
        return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/banker/bankers');
    }

}
