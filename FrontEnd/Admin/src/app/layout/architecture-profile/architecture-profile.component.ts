import {Component, OnInit} from '@angular/core';

import {ArchitectureService} from '../../services/architecture.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
    selector: 'app-architecture-profile',
    templateUrl: './architecture-profile.component.html',
    styleUrls: ['./architecture-profile.component.scss']
})
export class ArchitectureProfileComponent implements OnInit {
    selectedArchitecture: any[];
    selectedWorks: any[];

    constructor(private service: ArchitectureService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(parms => {
            let name = parms['name'];
            this.getArchitecture(name);
        });
    }

    getArchitecture(aName: String) {
        this.service.getArchitecture(aName)
            .subscribe(response => {
                this.selectedArchitecture = response.json();
                for (let ac of this.selectedArchitecture) {
                    this.getArchitectureWorks(ac['architectureID']);
                }
            });
    }

    getArchitectureWorks(acrid: number) {
        this.service.getArchitectureWorks(acrid)
            .subscribe(response => {
                this.selectedWorks = response.json();
            });
    }

}
