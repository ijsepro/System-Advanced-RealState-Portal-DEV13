import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ArchitectureService {

    constructor(private http: Http) {
    }

    getArchitectures() {
        return this.http.get('http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/architecture/architectures');
    }

}
