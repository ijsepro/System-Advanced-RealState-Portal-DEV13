import {Component, OnInit} from '@angular/core';
import {ConstructorService} from '../../services/constructor.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-constructor-profile',
    templateUrl: './constructor-profile.component.html',
    styleUrls: ['./constructor-profile.component.scss']
})
export class ConstructorProfileComponent implements OnInit {

    selectedConstructor: any[];
    selectedWorks: any[];

    constructor(private service: ConstructorService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(parms => {
            let name = parms['name'];
            this.getConstructor(name);
        });
    }

    getConstructor(name: String) {
        this.service.getConstructor(name)
            .subscribe(response => {
                this.selectedConstructor = response.json();
                for (let constructor of this.selectedConstructor) {
                    this.getConstructorWorks(constructor['ConstructorID']);
                }
            });
    }

    getConstructorWorks(conid: number) {

        this.service.getConstructorWorks(conid)
            .subscribe(response => {
                this.selectedWorks = response.json();
            });
    }
}
