import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidLogin: boolean;


  constructor(private element: ElementRef, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    const credentials = new FormData();
    credentials.append('email', this.element.nativeElement.querySelector('#email').value);
    credentials.append('password', this.element.nativeElement.querySelector('#password').value);
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/dashboard']);
          this.authService.setLoggedIn(true);
        } else {
          this.invalidLogin = true;
          this.router.navigate(['/login']);
        }
      });

  }

}
