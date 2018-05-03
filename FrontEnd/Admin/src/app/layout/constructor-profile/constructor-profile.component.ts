import {Component, OnInit} from '@angular/core';
import {ConstructorProfileService} from '../../services/constructor-profile.service';

@Component({
    selector: 'app-constructor-profile',
    templateUrl: './constructor-profile.component.html',
    styleUrls: ['./constructor-profile.component.scss']
})
export class ConstructorProfileComponent implements OnInit {

    selectedConstructor: any[];
    selectedWorks: any[];

    constructor(private service: ConstructorProfileService) {
    }

    ngOnInit() {
        this.getConstructor();
        this.getConstructorWorks();
    }

    getConstructor() {
        let cName = 'Kushan';

        this.service.getConstructor(cName)
            .subscribe(response => {
                this.selectedConstructor = response.json();
            });
    }

    getConstructorWorks() {
        let conid = 1;

        this.service.getConstructorWorks(conid)
            .subscribe(response => {
                this.selectedWorks = response.json();
            });
    }
}
