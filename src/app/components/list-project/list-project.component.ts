import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {ProjectModel} from "../../models/project.model";
import {Router} from "@angular/router";



@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: any[];
  //projects:ProjectModel[];

 

  constructor(private ProjectService: ProjectService, private router: Router) { }

  ngOnInit() {

    this.ProjectService.getProjects().subscribe((data : any[])=>{
      console.log(data);
      this.projects = data;
    })
    
    }

  

    ProjectDetails(myProject: ProjectModel){

     // window.localStorage.removeItem("editProjectId");
    //window.localStorage.setItem("editProjectId", myProject.projectId.toString());
	window.localStorage.removeItem("editProjectName");
    window.localStorage.setItem("editProjectName", myProject.name.toString());
      this.router.navigate(['edit-project']);
    }


    
  

}