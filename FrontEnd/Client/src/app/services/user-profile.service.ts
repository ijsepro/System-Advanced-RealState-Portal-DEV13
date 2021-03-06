import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {NotFoundError} from '../common/not-found-error';
import {AppError} from '../common/app-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class UserProfileService {

  private getConstructorUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/constructor/getConstructor';
  private getWorksUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/work/getConstructorWorks';
  private getEducationUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/education/getConstructorEducation';
  private getExperianceUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/experiance/getConstructorExperiance';
  private getCommentsUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/constructor_comments/getconstructorjoincomments';
  private getClientsUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/constructor_clients/getconstructorclients';
  private getProfileCommentUrl = 'http://localhost/MyServer/Edifices/BackEnd/index.php/constructor_comments/getconstructorprofilecomments';

  constructor(private http: Http) {

  }

  getConstructor(cName) {
    return this.http.post(this.getConstructorUrl + '/' + cName, cName)
      .catch(this.handleError);
  }

  getConstructorWorks(conid) {
    return this.http.post(this.getWorksUrl + '/' + conid, conid)
      .catch(this.handleError);

  }

  getConstructorEducation(conid) {
    return this.http.post(this.getEducationUrl + '/' + conid, conid)
      .catch(this.handleError);
  }

  getConstructorExperiance(conid) {
    return this.http.post(this.getExperianceUrl + '/' + conid, conid)
      .catch(this.handleError);
  }

  getConstructorComments(conid) {
    return this.http.post(this.getCommentsUrl + '/' + conid, conid)
      .catch(this.handleError);
  }

  getConstructorClients(conid) {
    return this.http.post(this.getClientsUrl + '/' + conid, conid)
      .catch(this.handleError);
  }

  getConstructorProfileComments(conid) {
    return this.http.post(this.getProfileCommentUrl + '/' + conid, conid)
      .catch(this.handleError);
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getArchitecture(aName) {
    return this.http.post('http://localhost/MyServer/Edifices/BackEnd/index.php/architecture/getArchitecture' + '/' + aName, aName)
      .catch(this.handleError);
  }

  getBanker(bName) {
    return this.http.post('http://localhost/MyServer/Edifices/BackEnd/index.php/banker/getBanker' + '/' + bName, bName)
      .catch(this.handleError);
  }

  getLandProvider(lName) {
    return this.http.post('http://localhost/MyServer/Edifices/BackEnd/index.php/land_Provider/getLandProvider' + '/' + lName, lName)
      .catch(this.handleError);
  }

  getFlatProvider(fName) {
    return this.http.post('http://localhost/MyServer/Edifices/BackEnd/index.php/flat_provider/getFlatProvider' + '/' + fName, fName)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 0) {
      return Observable.throw(new NotFoundError(error.json()));
    } else {
      return Observable.throw(new AppError(error.json()));
    }
  }
}
