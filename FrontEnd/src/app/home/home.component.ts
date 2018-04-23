import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    private toggleButton: any;
    private sidebarVisible: boolean;

    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
}
