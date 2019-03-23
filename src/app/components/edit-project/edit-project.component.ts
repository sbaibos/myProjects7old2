import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Router} from "@angular/router";
import { CustomPipesModule } from 'ngx-custom-pipes'

import {ProjectModel} from "../../models/project.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: ProjectModel;
  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private ProjectService: ProjectService, private router: Router) { }
  
    
  ngOnInit() {
    
    let projectId = window.localStorage.getItem("projectDetails2");
    console.log("project id is " + projectId);
    // if(!projectId) {
    //   alert("Invalid action.")
    //   this.router.navigate(['list-project']);
    //   return;
    // }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      employer: ['', Validators.required],
      dateStartEnd: ['', Validators.required],
      description: ['', Validators.required],
      analyticalDescription: ['', Validators.required],
      siteUrl: ['', Validators.required],
      photo: ['', Validators.required],
      technologiesUsed: ['', Validators.required]
    });
    this.ProjectService.getProjectById(+projectId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
 

  
  }

  
  onSubmit() {
    this.ProjectService.updateProject(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-project']);
        },
        error => {
          alert(error);
        });
  }



 

    
    



  backToMain(){


    this.router.navigate(['list-project']);
  }

}
