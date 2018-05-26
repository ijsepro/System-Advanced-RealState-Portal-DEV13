import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FlatProviderService {

    private getFlatProviderUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/flat_provider/getFlatProvider';
    // private getWorksUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/work/getConstructorWorks';

    constructor(private http: Http) {

    }

    getFlatProvider(fName) {
        return this.http.post(this.getFlatProviderUrl + '/' + fName, fName);
    }

    // getConstructorWorks(conid) {
    //     return this.http.post(this.getWorksUrl + '/' + conid, conid);
    // }

    getFlatProviders() {
        return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/flat_provider/flatProviders');
    }

}
