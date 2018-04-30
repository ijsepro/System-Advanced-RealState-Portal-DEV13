import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ForgetPasswordService} from "../services/forget-password.service";

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

    constructor(private service: ForgetPasswordService) {

    }

    ngOnInit() {
    }

    form = new FormGroup({
        email: new FormControl('',
            Validators.required,
        )
    });

    get email() {
        return this.form.get('email');
    }

    sendPasswordResetMail(input: HTMLInputElement) {
        let emaill = input.value;

        this.service.sendPasswordResetMail(emaill)
            .subscribe(response => {

                alert(response.json());

            });
    }

}
