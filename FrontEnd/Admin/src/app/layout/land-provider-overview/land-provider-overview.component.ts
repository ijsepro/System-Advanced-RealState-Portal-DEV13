import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {BankerService} from '../../services/banker.service';
import {LandProviderService} from '../../services/land-provider.service';

@Component({
  selector: 'app-land-provider-overview',
  templateUrl: './land-provider-overview.component.html',
  styleUrls: ['./land-provider-overview.component.scss']
})
export class LandProviderOverviewComponent implements OnInit {

    landProviders: any[];

    constructor(private service: LandProviderService, private router: Router) {
    }

    ngOnInit() {
        this.getLandProviders();

    }

    dropdown() {
        alert('Working');
    }

    search() {
        alert('Search');
    }

    getLandProvider(name) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name
            }
        };
        this.router.navigate(['/layout/landProviders/land-provider-profile'], navigationExtras)
    }

    getLandProviders() {
        this.service.getLandProviders().subscribe(res => {
            this.landProviders = res.json();
        });
    }

}
