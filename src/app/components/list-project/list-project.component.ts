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
  projects: Object;
  //projects:ProjectModel[];

 

  constructor(private ProjectService: ProjectService, private router: Router) { }

  ngOnInit() {

    this.ProjectService.getProjects().subscribe((data)=>{
      console.log(data);
      this.projects = Object.values(data['records']);
      console.log(this.projects);
    })
    
    }

  

    ProjectDetails(myProject: ProjectModel){

     // window.localStorage.removeItem("editProjectId");
    //window.localStorage.setItem("editProjectId", myProject.projectId.toString());
	window.localStorage.removeItem("projectDetails");
    window.localStorage.setItem("projectDetails", myProject.name.toString());
      this.router.navigate(['project-details']);
    }

    deleteProject(project: ProjectModel): void {
      this.ProjectService.deleteProject(project.id)
        .subscribe( data => {
         let array = Object.values(data['records']);
          array = array.filter(u => u !== project);
        })
    };

    addProject(): void {
      this.router.navigate(['add-project']);
    };
    
    EditProject(myProject: ProjectModel){
    
      window.localStorage.removeItem("projectDetails2");
      window.localStorage.setItem("projectDetails2", myProject.id.toString());
      this.router.navigate(['edit-project']);
     }
  

}