import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-architecture-overview',
    templateUrl: './architecture-overview.component.html',
    styleUrls: ['./architecture-overview.component.scss']
})
export class ArchitectureOverviewComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    dropdown() {
        alert("Working");
    }
    search() {
        alert("Search");
    }
}
