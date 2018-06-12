import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  projects: any[];

  constructor(private service: ClientService) {
  }

  ngOnInit() {
    this.viewProjects()
  }

  /**
   * @method viewProjects
   * get the works of the client in to works projects
   */
  viewProjects() {

    this.service.getWork(1)
      .subscribe(res => {
        this.projects = res.json();
      });
  }
  ratings(projectID){
    alert(projectID);
  }

}
