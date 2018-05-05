import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    private toggleButton: any;
    private sidebarVisible: boolean;
    private invalidLogin: boolean;

    model = {
        left: true,
        middle: false,
        right: false
    };

    constructor(public location: Location, private element : ElementRef,private authService: AuthService,private router: Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    signIn() {
        let credentials=new FormData();
        credentials.append('email',this.element.nativeElement.querySelector('#email').value);
        credentials.append('password',this.element.nativeElement.querySelector('#password').value);
        this.authService.login(credentials)
            .subscribe(result => {
                if (result){
                    this.router.navigate(['/layout']);
                    this.authService.setLoggedIn(true);
                } else{
                    this.invalidLogin=true;
                    this.router.navigate(['/home']);
                }
            });
    }

}
