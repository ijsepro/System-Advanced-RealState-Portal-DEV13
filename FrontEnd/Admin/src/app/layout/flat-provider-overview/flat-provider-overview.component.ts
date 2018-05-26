import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {LandProviderService} from '../../services/land-provider.service';
import {FlatProviderService} from '../../services/flat-provider.service';

@Component({
  selector: 'app-flat-provider-overview',
  templateUrl: './flat-provider-overview.component.html',
  styleUrls: ['./flat-provider-overview.component.scss']
})
export class FlatProviderOverviewComponent implements OnInit {

    flatProviders: any[];

    constructor(private service: FlatProviderService, private router: Router) {
    }

    ngOnInit() {
        this.getFlatProviders();

    }

    dropdown() {
        alert('Working');
    }

    search() {
        alert('Search');
    }

    getFlatProvider(name) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name
            }
        };
        this.router.navigate(['/layout/flatProviders/flat-provider-profile'], navigationExtras)
    }

    getFlatProviders() {
        this.service.getFlatProviders().subscribe(res => {
            this.flatProviders = res.json();
        });
    }

}
