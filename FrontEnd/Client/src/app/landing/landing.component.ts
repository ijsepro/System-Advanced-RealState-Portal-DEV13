import {Component, ElementRef, OnInit} from '@angular/core';
import {any} from 'codelyzer/util/function';
import {UserRegistrationService} from '../services/user-registration.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  url: any = '../../assets/img/kit/faces/card-profile2-square.jpg';

  constructor(private elem: ElementRef, private service: UserRegistrationService) {
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
        alert('New User Registerd successfully')
      } else {
        alert('Error Registering user please try again.......')
      }
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert(error.originalError);
      } else {
        throw error;
      }
    });
  }
}
