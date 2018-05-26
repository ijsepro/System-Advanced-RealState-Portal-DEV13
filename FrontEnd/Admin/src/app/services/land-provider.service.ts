import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LandProviderService {

    private getLandProviderUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/land_provider/getLandProvider';
    // private getWorksUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/work/getConstructorWorks';

    constructor(private http: Http) {

    }

    getLandProvider(lName) {
        return this.http.post(this.getLandProviderUrl + '/' + lName, lName);
    }

    // getConstructorWorks(conid) {
    //     return this.http.post(this.getWorksUrl + '/' + conid, conid);
    // }

    getLandProviders() {
        return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/land_provider/landProviders');
    }

}
