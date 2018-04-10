import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor() { }

  ngOnInit() {

  }
  form = new FormGroup({
       email : new FormControl('', [
            Validators.required,
            Validators.email
        ]),
       Password: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ])
    });

    get email() {
        return this.form.get('email');
    }

    get Password() {
        return this.form.get('Password');
    }

}
