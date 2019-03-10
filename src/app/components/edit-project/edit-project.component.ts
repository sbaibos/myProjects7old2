import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projects: Object;
  //projects: Array<any>;
  
  constructor(private ProjectService: ProjectService, private router: Router) { }

  ngOnInit() {
    
    let projectId = window.localStorage.getItem("editProjectId")

    console.log("user id is " + projectId);

    this.ProjectService.getProjects().subscribe(data => {
      this.projects = data;

     

      console.log("this projects is " + this.projects);

      const mapped2 = Object.keys(data).map(key => data[key]);
      
      
      
      
      console.log("mapped is " + mapped2);


     }
  );

  
//    let result = this.projects.filter((projectId) => this.projects.projectId === projectId);
   
//    console.log(result);

//   const obj = {5.0: 10, 28.0: 14, 3.0: 6};

// const mapped = Object.keys(this.projects).map(key => this.projects[key]);

// this.projects.isArray(obj)


// console.log(mapped);







  }

  aEqualsOne(item) {
    return item.projectId === 1;
}



 

    
    



  backToMain(){


    this.router.navigate(['list-project']);
  }

}
