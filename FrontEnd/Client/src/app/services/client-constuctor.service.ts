import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {NotFoundError} from '../common/not-found-error';
import {AppError} from '../common/app-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
@Injectable()
export class ClientConstuctorService {

  private getConstructorUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/constructor/getConstructor';
  private getWorksUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/work/getConstructorWorks';
  private getEducationUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/education/getConstructorEducation';
  private getExperianceUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/experiance/getConstructorExperiance';
  private getCommentsUrl = 'http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/constructor_comments/getConstructorComments';

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

  private handleError(error: Response){
    if (error.status === 0) {
      return Observable.throw(new NotFoundError(error.json()));
    } else {
      return Observable.throw(new AppError(error.json()));
    }
  }
}
