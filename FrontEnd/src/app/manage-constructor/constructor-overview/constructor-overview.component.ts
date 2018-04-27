import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-constructor-overview',
    templateUrl: './constructor-overview.component.html',
    styleUrls: ['./constructor-overview.component.scss']
})
export class ConstructorOverviewComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    dropdown() {
        alert('Working');
    }

    search() {

    }
}
