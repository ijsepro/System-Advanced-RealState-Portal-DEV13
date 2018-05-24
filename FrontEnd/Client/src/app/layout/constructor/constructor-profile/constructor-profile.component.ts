import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientConstuctorService} from '../../../services/client-constuctor.service';
import {NotFoundError} from '../../../common/not-found-error';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-constructor-profile',
  templateUrl: './constructor-profile.component.html',
  styleUrls: ['./constructor-profile.component.css'],
  providers: [NGXLogger]
})
export class ConstructorProfileComponent implements OnInit {

  selectedConstructor: any[];
  selectedWorks: any[];
  selectedEducation: any[];
  selectedExperiance: any[];
  selectedComments: any[];
  selectedClients: any[];
  selectedProfileComments: any[];

  constructor(private service: ClientConstuctorService, private router: Router, private route: ActivatedRoute, private logger: NGXLogger, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getConstructor();
  }

  getConstructor() {
    let name = 'Kushan';
    this.service.getConstructor(name)
      .subscribe(response => {
          this.selectedConstructor = response.json();
          for (let constructor of this.selectedConstructor) {
            this.getConstructorWorks(constructor['ConstructorID']);
            // this.getConstructorEducation(constructor['ConstructorID']);
            // this.getConstructorExperiance(constructor['ConstructorID']);
            // this.getConstructorComments(constructor['ConstructorID']);
            // this.getConstructorClients(constructor['ConstructorID']);
            // this.getConstructorProfileComments(constructor['ConstructorID']);
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

}
