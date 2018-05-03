import {Component, OnInit} from '@angular/core';
import {ConstructorOverviewService} from '../../services/constructor-overview.service';

@Component({
    selector: 'app-constructor-overview',
    templateUrl: './constructor-overview.component.html',
    styleUrls: ['./constructor-overview.component.scss']
})
export class ConstructorOverviewComponent implements OnInit {

    constructors: any[];

    constructor(private service: ConstructorOverviewService) {
    }

    ngOnInit() {
        this.getConstructors();
    }

    dropdown() {
        alert('Working');
    }

    search() {
        alert('Search');
    }

    getConstructors() {
        this.service.getConstructors().subscribe(res => {
            this.constructors = res.json();
        });
    }
}
