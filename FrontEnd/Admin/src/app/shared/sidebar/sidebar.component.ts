import { Component, OnInit } from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";
import {DashboardComponent} from "../../layout/dashboard/dashboard.component";

// declare interface RouteInfo {
//     path: string;
//     title: string;
//     icon: string;
//     class: string;
// }
// export const ROUTES: RouteInfo[] = [
//
//     { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//     { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
// ];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
      // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
