import {Component, OnInit} from '@angular/core';
import {ArchitectureService} from '../../services/architecture.service';

@Component({
    selector: 'app-architecture-overview',
    templateUrl: './architecture-overview.component.html',
    styleUrls: ['./architecture-overview.component.scss']
})
export class ArchitectureOverviewComponent implements OnInit {

    constructor(private service: ArchitectureService) {
    }

    ngOnInit() {
    }

    dropdown() {
        this.service.getArchitectures().subscribe(res => {
            let s = res.json();
            console.log(s['adminID']);
        });
    }

    search() {
        alert('Search');
    }
}
