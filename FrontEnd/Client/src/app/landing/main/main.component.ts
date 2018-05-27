import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {UserRolesService} from '../../services/user-roles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRoles(name) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          'name': name
        }
      };
      this.router.navigate(['/user-roles'], navigationExtras)
  }

}
