import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppError} from '../common/app-error';
import {Observable} from 'rxjs/Observable';
import {NotFoundError} from '../common/not-found-error';

@Injectable()
export class PostWorkService {

  constructor(private http: Http) {
  }

  postFileType(formdata) {
    return this.http.post('http://localhost/BackEnd/Edifices/BackEnd/index.php/work/postProject', formdata)
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
