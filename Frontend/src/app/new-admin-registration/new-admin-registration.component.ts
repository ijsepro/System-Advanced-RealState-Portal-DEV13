import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-admin-registration',
  templateUrl: './new-admin-registration.component.html',
  styleUrls: ['./new-admin-registration.component.scss'],

})
export class NewAdminRegistrationComponent implements OnInit {
url:any = '../../../assets/img/faces/avatar.jpg';
  constructor() { }

  ngOnInit() {
  }
    readUrl(event:any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event:any) => {
                this.url = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

}
