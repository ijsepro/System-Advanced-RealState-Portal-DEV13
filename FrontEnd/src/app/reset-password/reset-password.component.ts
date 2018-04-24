import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    form = new FormGroup({
        newPassword: new FormControl('',
            Validators.required,
        ),
        rePassword: new FormControl('',
            Validators.required,
        )
    });

    get newPassword() {
        return this.form.get('newPassword');
    }

    get rePassword() {
        return this.form.get('rePassword');
    }

}
