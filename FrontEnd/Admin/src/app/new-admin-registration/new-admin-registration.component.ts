import {Component, ElementRef, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-new-admin-registration',
    templateUrl: './new-admin-registration.component.html',
    styleUrls: ['./new-admin-registration.component.scss']
})
export class NewAdminRegistrationComponent implements OnInit {
    url: any = '../../../assets/img/faces/avatar.jpg';
    admin: any = [];

    constructor(private service: AdminService, private elem: ElementRef,private toastr: ToastrService) {
    }

    ngOnInit() {
    }

    readUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: any) => {
                this.url = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    newAdmin() {
        let files = this.elem.nativeElement.querySelector('#selectFile').files;

        let formData = new FormData();
        let file = files[0];
        formData.append('selectFile', file, file.name);
        let adminName = this.elem.nativeElement.querySelector('#adminName').value;
        let adminEmail = this.elem.nativeElement.querySelector('#adminEmail').value;
        let adminPassword = this.elem.nativeElement.querySelector('#adminPassword').value;
        formData.append('adminName', adminName);
        formData.append('adminEmail', adminEmail);
        formData.append('adminPassword', adminPassword);
        this.service.registerAdmin(formData)
            .subscribe(res => {
                if (res.json() === 1) {
                    this.toastr.success('Registered', '');
                } else {
                    this.toastr.error('Error!!!', '');
                }
            });

    }

}
