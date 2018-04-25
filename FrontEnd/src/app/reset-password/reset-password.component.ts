import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResetPasswordService} from '../services/reset-password.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    constructor(private service: ResetPasswordService, private elem: ElementRef) {
    }

    ngOnInit() {
    }

    form = new FormGroup({
        securityCode: new FormControl('',
            Validators.required,
        ),
        newPassword: new FormControl('',
            Validators.required,
        ),
        rePassword: new FormControl('',
            Validators.required,
        )
    });

    get securityCode() {
        return this.form.get('securityCode');
    }

    get newPassword() {
        return this.form.get('newPassword');
    }

    get rePassword() {
        return this.form.get('rePassword');
    }

    updatePassword() {
        const formdata = new FormData();
        const securityCode = this.elem.nativeElement.querySelector('#securityCode').value;
        const newPassword = this.elem.nativeElement.querySelector('#newPassword').value;
        const rePassword = this.elem.nativeElement.querySelector('#rePassword').value;
        formdata.append('securityCodee', securityCode);
        formdata.append('newPasswordd', newPassword);
        formdata.append('rePasswordd', rePassword);

        if (newPassword === rePassword) {

            this.service.updatePassword(formdata).subscribe(
                resp => {
                    alert(resp.json());
                }
            )
        } else{
            alert("Password didn't match.")
        }
    }

}
