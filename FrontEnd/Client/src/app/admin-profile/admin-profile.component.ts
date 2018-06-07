import {Component, ElementRef, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  architectures: any[];
  bankers: any[];

  constructor(private service: AdminService) {
  }


  ngOnInit() {
    this.loadArchitectures();
    this.loadBankers();
  }

  loadArchitectures() {
    this.service.getArchitectures().subscribe(res => {
      this.architectures = res.json();
    });
  }

  loadBankers() {
    this.service.getBankers().subscribe(res => {
      this.bankers = res.json();
    });
  }

}
