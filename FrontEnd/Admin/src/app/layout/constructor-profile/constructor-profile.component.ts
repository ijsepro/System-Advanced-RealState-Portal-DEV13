import {Component, OnInit} from '@angular/core';
import {ConstructorProfileService} from '../../services/constructor-profile.service';

@Component({
    selector: 'app-constructor-profile',
    templateUrl: './constructor-profile.component.html',
    styleUrls: ['./constructor-profile.component.scss']
})
export class ConstructorProfileComponent implements OnInit {

    selectedConstructor: any[];

    constructor(private service: ConstructorProfileService) {
    }

    ngOnInit() {
        this.getConstructor();
    }

    getConstructor() {
        let cName = 'Dhananjala';

        this.service.getConstructor(cName)
            .subscribe(response => {
                this.selectedConstructor = response.json();
                console.log(this.selectedConstructor);

            });
    }
}
