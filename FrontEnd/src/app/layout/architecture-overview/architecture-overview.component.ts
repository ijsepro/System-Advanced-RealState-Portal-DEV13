import {Component, OnInit} from '@angular/core';
import {ArchitectureService} from '../../services/architecture.service';

@Component({
    selector: 'app-architecture-overview',
    templateUrl: './architecture-overview.component.html',
    styleUrls: ['./architecture-overview.component.scss']
})
export class ArchitectureOverviewComponent implements OnInit {
    architectures: any [];

    constructor(private service: ArchitectureService) {
        this.getArchitectures();
    }

    ngOnInit() {
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

    getArchitectures() {
        this.service.getArchitectures().subscribe(res => {
            this.architectures = res.json();
        });
    }
}
