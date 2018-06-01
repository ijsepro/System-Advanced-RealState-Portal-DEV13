import {Component, OnInit} from '@angular/core';
import {UserRolesService} from '../services/user-roles.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  name: any;
  roles: any[];

  roleName: any;

  constructor(private service: UserRolesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(parms => {
      let name = parms['name'];
      this.name = name;
      this.getRoles(name);
    });
  }

  getRoles(name) {
    if (name === 'Architectures') {
      this.service.getArchitectures().subscribe(res => {
        this.roles = res.json();
      });
    } else if (name === 'Constructors') {
      this.service.getConstructors().subscribe(res => {
        this.roles = res.json();
      });
    } else if (name === 'Bankers') {
      this.service.getBankers().subscribe(res => {
        this.roles = res.json();
      });
    } else if (name === 'LandProviders') {
      this.service.getLandProviders().subscribe(res => {
        this.roles = res.json();
      });
    } else if (name === 'FlatProviders') {
      this.service.getFlatProviders().subscribe(res => {
        this.roles = res.json();
      });
    }
  }

  getRoleProfile(name,role) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'name': name,
        'role': role
      }
    };
    this.router.navigate(['/profile'], navigationExtras)
  }

}
