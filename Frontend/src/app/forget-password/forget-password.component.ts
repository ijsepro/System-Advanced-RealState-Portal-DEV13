import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailValidate} from "./email-validate";
import {ForgetPasswordServiceService} from "../services/forget-password-service.service";

@Component({
    selector: 'forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

    posts: any[];

    constructor(private service: ForgetPasswordServiceService) {

    }

    ngOnInit() {
        // this.service.getPosts()
        //     .subscribe(response => {
        //          this.posts = response.json();
        //     });
    }


    form = new FormGroup({
        email: new FormControl('',
            Validators.required,
            //EmailValidate.checkEmailRegisterd
        )
    });

    get email() {
        return this.form.get('email');
    }

    sendMail(input: HTMLInputElement) {
        let emaill = input.value;
        console.log(emaill);

        this.service.sendMail(emaill)
            .subscribe(response => {

                alert(response.json());

            });
    }
}
