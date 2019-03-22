import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Router} from "@angular/router";
import { CustomPipesModule } from 'ngx-custom-pipes'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projects: any[];
  constructor(private ProjectService: ProjectService, private router: Router) { }
  PROJECTNAME = window.localStorage.getItem("editProjectName");
  ngOnInit() {

    console.log("project name is " + this.PROJECTNAME);

   
    this.ProjectService.getProjects().subscribe((data : any[])=>{
    console.log(data);
    this.projects = data;

    console.log("this projects is " + this.projects);

    const mapped2 = Object.keys(data).map(key => data[key]);
    
    
    
    
    console.log("mapped is " + mapped2);


   }
);


  }


  backToMain(){


    this.router.navigate(['list-project']);
  }

}
