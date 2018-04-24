import {Component, ElementRef, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
    selector: 'app-new-admin',
    templateUrl: './new-admin.component.html',
    styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {

    constructor(private service: AdminService, private elem: ElementRef) {
    }

    ngOnInit() {
    }

    sendEmail() {
        const formdata = new FormData();
        const userName = this.elem.nativeElement.querySelector('#userName').value;
        const userEmail = this.elem.nativeElement.querySelector('#userEmail').value;
        const adminUserName = this.elem.nativeElement.querySelector('#adminUserName').value;
        formdata.append('userName', userName);
        formdata.append('userEmail', userEmail);
        formdata.append('adminUserName', adminUserName);

        this.service.sendEmail(formdata).subscribe(
            resp => {
                alert(resp.json());
            }
        )
    }
}
