import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BankerService {

  constructor(private http:Http) { }
    getBankers() {
        return this.http.get('http://localhost/idea/Edifices/BackEnd/index.php/banker/architectures');
    }

    getBanker(bName) {
        return this.http.post('http://localhost/idea/Edifices/BackEnd/index.php/banker/getArchitecture' + '/' + bName, bName);
    }

    getBankerWorks(bnid) {
        return this.http.post('http://localhost/idea/Edifices/BackEnd/index.php/work/getArchitectureWorks' + '/' + bnid, bnid);
    }
}
