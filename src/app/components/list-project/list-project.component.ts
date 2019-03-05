import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {ProjectModel} from "../../models/project.model";


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  users: Object;
  myProjects:ProjectModel[];

  

  constructor(private ProjectService: ProjectService) { }

  ngOnInit() {

    this.ProjectService.getProjects().subscribe(data => {
        this.users = data
       console.log(this.users);
      }
    );
     
    
    }

    firstClick() {
    this.ProjectService.firstClick();
  }


    
  

}