import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-banker-overvire',
    templateUrl: './banker-overvire.component.html',
    styleUrls: ['./banker-overvire.component.scss']
})
export class BankerOvervireComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    dropdown() {
        alert('overview');
    }

    search() {
        alert('Search');
    }
}
