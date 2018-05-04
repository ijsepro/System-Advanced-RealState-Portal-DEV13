import {Component, OnInit} from '@angular/core';
import {ConstructorService} from '../../services/constructor.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-constructor-overview',
    templateUrl: './constructor-overview.component.html',
    styleUrls: ['./constructor-overview.component.scss']
})
export class ConstructorOverviewComponent implements OnInit {

    constructors: any[];

    constructor(private service: ConstructorService, private router: Router) {
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

    getConstructor(name) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name
            }
        };
        this.router.navigate(['/layout/constructors/constructor-profile'], navigationExtras)
    }

    getConstructors() {
        this.service.getConstructors().subscribe(res => {
            this.constructors = res.json();
        });
    }
}
