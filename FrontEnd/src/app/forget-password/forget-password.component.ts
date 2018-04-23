import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

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

}
