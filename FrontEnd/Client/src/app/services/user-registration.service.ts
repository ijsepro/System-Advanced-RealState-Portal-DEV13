import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';

@Injectable()
export class UserRegistrationService {

  constructor(private http: Http) {
  }

  registerUser(formdata) {
    return this.http.post('http://localhost/IntellijIDEA/BackEnd/BackEnd/index.php/user/registerNewUser', formdata)
      .catch((error: Response) => {
        if (error.status === 0)
          return Observable.throw(new NotFoundError(error.json()));
        return Observable.throw(new AppError(error.json()));
      });
  }
}
