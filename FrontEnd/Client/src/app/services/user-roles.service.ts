import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserRolesService {

  constructor(private http: Http) {
  }

  getArchitectures() {
    return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/architecture/architectures');
  }

  getConstructors() {
    return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/constructor/constructors');
  }

  getBankers() {
    return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/banker/bankers');
  }

  getFlatProviders() {
    return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/flat_provider/flatProviders');
  }

  getLandProviders() {
    return this.http.get('http://localhost/MyServer/Edifices/BackEnd/index.php/land_provider/landProviders');
  }

}
