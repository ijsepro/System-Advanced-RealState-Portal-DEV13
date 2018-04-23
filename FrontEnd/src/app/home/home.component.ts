import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

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
    constructor(public location: Location, private element : ElementRef,private router: Router,
                private authService: AuthService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    signIn(credentials) {
        // this.authService.login(credentials)
        //     .subscribe(result => {
        //         if (result)
        //             this.router.navigate(['/']);
        //         else
        //             this.invalidLogin = true;
        //     });
    }

}
