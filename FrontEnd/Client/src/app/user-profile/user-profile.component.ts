import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserProfileService} from '../services/user-profile.service';
import {NotFoundError} from '../common/not-found-error';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-constructor-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [NGXLogger]
})
export class UserProfileComponent implements OnInit {

  selectedRole: any[];
  selectedWorks: any[];
  selectedEducation: any[];
  selectedExperiance: any[];
  selectedComments: any[];
  selectedClients: any[];
  selectedProfileComments: any[];

  constructor(private service: UserProfileService, private router: Router, private route: ActivatedRoute, private logger: NGXLogger, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(parms => {
      let name = parms['name'];
      let role = parms['role'];
      this.getRoleProfile(name, role);
    });
  }

  getRoleProfile(name: String, role: String) {
    if (role === 'Constructor') {
      this.service.getConstructor(name)
        .subscribe(response => {
            this.selectedRole = response.json();
            for (let role of this.selectedRole) {
              this.getConstructorWorks(role['ConstructorID']);
            }
          }, (error: Response) => {
            if (error instanceof NotFoundError) {
              this.toastr.warning('Please Try Again Shortly', 'server Error', {
                progressBar: true,
                positionClass: 'toast-top-center'
              });

              this.logger.debug('Server Error ');
            } else {
              throw error;
            }
          }
        );
    } else if (role === 'Architecture') {
      this.service.getArchitecture(name)
        .subscribe(response => {
            this.selectedRole = response.json();
            for (let role of this.selectedRole) {
              // this.getConstructorWorks(role['ArchitectureID']);
            }
          }, (error: Response) => {
            if (error instanceof NotFoundError) {
              this.toastr.warning('Please Try Again Shortly', 'server Error', {
                progressBar: true,
                positionClass: 'toast-top-center'
              });

              this.logger.debug('Server Error ');
            } else {
              throw error;
            }
          }
        );
    } else if (role === 'Banker') {
      this.service.getBanker(name)
        .subscribe(response => {
            this.selectedRole = response.json();
            for (let role of this.selectedRole) {
              // this.getConstructorWorks(role['ArchitectureID']);
            }
          }, (error: Response) => {
            if (error instanceof NotFoundError) {
              this.toastr.warning('Please Try Again Shortly', 'server Error', {
                progressBar: true,
                positionClass: 'toast-top-center'
              });

              this.logger.debug('Server Error ');
            } else {
              throw error;
            }
          }
        );
    }else if (role === 'LandProvider') {
      this.service.getLandProvider(name)
        .subscribe(response => {
            this.selectedRole = response.json();
            for (let role of this.selectedRole) {
              // this.getConstructorWorks(role['ArchitectureID']);
            }
          }, (error: Response) => {
            if (error instanceof NotFoundError) {
              this.toastr.warning('Please Try Again Shortly', 'server Error', {
                progressBar: true,
                positionClass: 'toast-top-center'
              });

              this.logger.debug('Server Error ');
            } else {
              throw error;
            }
          }
        );
    }else if (role === 'FlatProvider') {
      this.service.getFlatProvider(name)
        .subscribe(response => {
            this.selectedRole = response.json();
            for (let role of this.selectedRole) {
              // this.getConstructorWorks(role['ArchitectureID']);
            }
          }, (error: Response) => {
            if (error instanceof NotFoundError) {
              this.toastr.warning('Please Try Again Shortly', 'server Error', {
                progressBar: true,
                positionClass: 'toast-top-center'
              });

              this.logger.debug('Server Error ');
            } else {
              throw error;
            }
          }
        );
    }

  }

  getConstructorWorks(conid: number) {

    this.service.getConstructorWorks(conid)
      .subscribe(response => {
        this.selectedWorks = response.json();
      }, (error: Response) => {
        if (error instanceof NotFoundError) {
          this.toastr.warning('Please Try Again Shortly', 'server Error', {
            progressBar: true,
            positionClass: 'toast-top-center'
          });

          this.logger.debug('Server Error ');
        } else {
          throw error;
        }
      });
    this.getConstructorEducation(conid);
  }

  getConstructorEducation(conid: number) {

    this.service.getConstructorEducation(conid)
      .subscribe(response => {
        this.selectedEducation = response.json();
      }, (error: Response) => {
        if (error instanceof NotFoundError) {
          this.toastr.warning('Please Try Again Shortly', 'server Error', {
            progressBar: true,
            positionClass: 'toast-top-center'
          });

          this.logger.debug('Server Error ');
        } else {
          throw error;
        }
      });
    this.getConstructorExperiance(conid);
  }

  getConstructorExperiance(conid: number) {

    this.service.getConstructorExperiance(conid)
      .subscribe(response => {
        this.selectedExperiance = response.json();
      }, (error: Response) => {
        if (error instanceof NotFoundError) {
          this.toastr.warning('Please Try Again Shortly', 'server Error', {
            progressBar: true,
            positionClass: 'toast-top-center'
          });

          this.logger.debug('Server Error ');
        } else {
          throw error;
        }
      });
    this.getConstructorComments(conid);
  }

  getConstructorComments(conid: number) {

    this.service.getConstructorComments(conid)
      .subscribe(response => {
        this.selectedComments = response.json();
      }, (error: Response) => {
        if (error instanceof NotFoundError) {
          this.toastr.warning('Please Try Again Shortly', 'server Error', {
            progressBar: true,
            positionClass: 'toast-top-center'
          });

          this.logger.debug('Server Error ');
        } else {
          throw error;
        }
      });
    this.getConstructorClients(conid);
  }

  getConstructorClients(conid: number) {

    this.service.getConstructorClients(conid)
      .subscribe(response => {
        this.selectedClients = response.json();
      }, (error: Response) => {
        if (error instanceof NotFoundError) {
          this.toastr.warning('Please Try Again Shortly', 'server Error', {
            progressBar: true,
            positionClass: 'toast-top-center'
          });

          this.logger.debug('Server Error ');
        } else {
          throw error;
        }
      });
    this.getConstructorProfileComments(conid);
  }

  getConstructorProfileComments(conid: number) {

    this.service.getConstructorProfileComments(conid)
      .subscribe(response => {
        this.selectedProfileComments = response.json();
      }, (error: Response) => {
        if (error instanceof NotFoundError) {
          this.toastr.warning('Please Try Again Shortly', 'server Error', {
            progressBar: true,
            positionClass: 'toast-top-center'
          });

          this.logger.debug('Server Error ');
        } else {
          throw error;
        }
      });
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
