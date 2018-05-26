import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ConstructorService} from '../../services/constructor.service';
import {BankerService} from '../../services/banker.service';

@Component({
  selector: 'app-bankers-overview',
  templateUrl: './bankers-overview.component.html',
  styleUrls: ['./bankers-overview.component.scss']
})
export class BankersOverviewComponent implements OnInit {

    bankers: any[];

    constructor(private service: BankerService, private router: Router) {
    }

    ngOnInit() {
        this.getBankers();
    }

    dropdown() {
        alert('Working');
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
        this.router.navigate(['/layout/bankers/banker-profile'], navigationExtras)
    }

    getBankers() {
        this.service.getBankers().subscribe(res => {
            this.bankers = res.json();
        });
    }

}
