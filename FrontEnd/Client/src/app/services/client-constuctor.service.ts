import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ClientConstuctorService {

  private getConstructorUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/constructor/getConstructor';
  private getWorksUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/work/getConstructorWorks';

  constructor(private http: Http) {

  }

  getConstructor(cName) {
    return this.http.post(this.getConstructorUrl + '/' + cName, cName);
  }

  getConstructorWorks(conid) {
    return this.http.post(this.getWorksUrl + '/' + conid, conid);
  }

}
