import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ClientService {

  constructor(private http: Http) {
  }

  /**
   *
   * @param clientID
   * find the work of this client
   */
  getWork(clientID) {
    console.log(clientID);
    return this.http.get('http://localhost/BackEnd/Edifices/BackEnd/index.php/user/getProjects'+'/'+clientID);
  }

}
