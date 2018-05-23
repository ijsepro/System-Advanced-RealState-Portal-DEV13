import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {any} from 'codelyzer/util/function';
import {UserRegistrationService} from '../services/user-registration.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {ToastrService} from 'ngx-toastr';
import {NGXLogger} from 'ngx-logger';
import {SwalComponent} from '@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NGXLogger]
})

export class LandingComponent implements OnInit {
  url: any = '../../assets/img/kit/faces/card-profile2-square.jpg';
  @ViewChild('registerd') private registerd: SwalComponent;

  constructor(private elem: ElementRef, private service: UserRegistrationService, private toastr: ToastrService, private logger: NGXLogger) {
  }

  ngOnInit() {

  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  Success() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  register() {
    const formData = new FormData();

    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let file = files[0];

    const userName = this.elem.nativeElement.querySelector('#userName').value;
    const userPassword = this.elem.nativeElement.querySelector('#userPassword').value;
    const userEmail = this.elem.nativeElement.querySelector('#userEmail').value;
    const userContactNumber = this.elem.nativeElement.querySelector('#userContactNumber').value;
    const companyName = this.elem.nativeElement.querySelector('#companyName').value;
    const status = this.elem.nativeElement.querySelector('#status').value;
    const aboutYou = this.elem.nativeElement.querySelector('#aboutYou').value;
    const officialNumber = this.elem.nativeElement.querySelector('#officialNumber').value;

    formData.append('selectFile', file, file.name);
    formData.append('userName', userName);
    formData.append('userPassword', userPassword);
    formData.append('userEmail', userEmail);
    formData.append('contactNumber', userContactNumber);
    formData.append('company', companyName);
    formData.append('status', status);
    formData.append('aboutYou', aboutYou);
    formData.append('officialNumber', officialNumber);

    this.service.registerUser(formData).subscribe(res => {
      if (res.json() === 1) {
        this.toastr.success('Registerd')

      } else {
        this.toastr.error('Registerd Unsuccessful try Again')
      }
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        this.toastr.warning('Please Try Again Shortly', 'server Error', {
          progressBar: true,
          positionClass: 'toast-top-center'
        });
        this.logger.debug('Server Error ');
        // this.registerd.show();
      } else {
        throw error;
      }
    });
  }
}
