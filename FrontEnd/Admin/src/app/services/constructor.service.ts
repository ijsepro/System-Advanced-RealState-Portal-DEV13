import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConstructorService {

    private getConstructorUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/constructor/getConstructor';
    private getWorksUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/work/getConstructorWorks';

    constructor(private http: Http) {

    }

    getConstructor(cName) {
        return this.http.post(this.getConstructorUrl + '/' + cName, cName);
    }

    getConstructorWorks(conid) {
        return this.http.post(this.getWorksUrl + '/' + conid, conid);
    }

    getConstructors() {
        return this.http.get('http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/constructor/constructors');
    }
}
