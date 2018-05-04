import {Component, OnInit} from '@angular/core';
import {ArchitectureService} from '../../services/architecture.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-architecture-overview',
    templateUrl: './architecture-overview.component.html',
    styleUrls: ['./architecture-overview.component.scss']
})
export class ArchitectureOverviewComponent implements OnInit {
    architectures: any [];

    constructor(private service: ArchitectureService, private router: Router) {

    }

    ngOnInit() {
        this.getArchitectures();
    }

    dropdown() {
        // this.service.getArchitectures().subscribe(res => {
        //     let s = res.json();
        //     console.log(s);
        // });
        // this.getArchitectures();
    }

    search() {
        alert('Search');
    }

    getArchitecture(name) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name
            }
        };
        this.router.navigate(['/layout/architectures/architecture-profile'], navigationExtras)
    }

    getArchitectures() {
        this.service.getArchitectures().subscribe(res => {
            this.architectures = res.json();
        });
    }
}
