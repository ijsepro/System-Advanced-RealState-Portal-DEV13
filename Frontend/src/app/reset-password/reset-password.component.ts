import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    form = new FormGroup({
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]),
        rePassword: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ])
    });

    get password() {
        return this.form.get('password');
    }

    get rePassword() {
        return this.form.get('rePassword');
    }
}
