import {Component, OnInit} from '@angular/core';
import {BankerService} from '../../services/banker.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-banker-overvire',
    templateUrl: './banker-overview.component.html',
    styleUrls: ['./banker-overview.component.scss']
})
export class BankerOverviewComponent implements OnInit {
    bankers: any[];

    constructor(private service: BankerService, private router: Router) {
    }

    ngOnInit() {
    }

    dropdown() {
        alert('overview');
    }

    search() {
        alert('Search');
    }

    getBanker(name) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name
            }
        };
        this.router.navigate(['/layout/architectures/banker-profile'], navigationExtras)
    }

    getBankers() {
        this.service.getBankers().subscribe(res => {
            this.bankers = res.json();
        });
    }
}
