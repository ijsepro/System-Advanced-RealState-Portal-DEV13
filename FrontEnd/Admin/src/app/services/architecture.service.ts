import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ArchitectureService {

    constructor(private http: Http) {
    }

    getArchitectures() {
        return this.http.get('http://localhost/Backend/Edifices/BackEnd/index.php/architecture/architectures');
    }

    getArchitecture(aName) {
        return this.http.post('http://localhost/Backend/Edifices/BackEnd/index.php/architecture/getArchitecture' + '/' + aName, aName);
    }

    getArchitectureWorks(arcid) {
        return this.http.post('http://localhost/Backend/Edifices/BackEnd/index.php/work/getArchitectureWorks' + '/' + arcid, arcid);
    }
}
