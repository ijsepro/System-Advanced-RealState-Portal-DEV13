import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AdminService {

  constructor(private http: Http) {
  }

  getArchitectures() {
    return this.http.get('http://localhost/Backend/Edifices/BackEnd/index.php/architecture/architectures');
  }

  getBankers() {
    return this.http.get('http://localhost/Backend/Edifices/BackEnd/index.php/banker/bankers');
  }
}
