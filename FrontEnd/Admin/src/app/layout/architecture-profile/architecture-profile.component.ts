import {Component, OnInit} from '@angular/core';

import {ArchitectureService} from '../../services/architecture.service';

@Component({
    selector: 'app-architecture-profile',
    templateUrl: './architecture-profile.component.html',
    styleUrls: ['./architecture-profile.component.scss']
})
export class ArchitectureProfileComponent implements OnInit {
    selectedArchitecture: any[];
    selectedWorks: any[];

    constructor(private service: ArchitectureService) {
    }

    ngOnInit() {
        this.getArchitecture();
        this.getArchitectureWorks();
    }

    getArchitecture() {
        let aName = 'Kushan';

        this.service.getArchitecture(aName)
            .subscribe(response => {
                this.selectedArchitecture = response.json();
            });
    }

    getArchitectureWorks() {
        let acrid = 6;

        this.service.getArchitectureWorks(acrid)
            .subscribe(response => {
                this.selectedWorks = response.json();
            });
    }

}
