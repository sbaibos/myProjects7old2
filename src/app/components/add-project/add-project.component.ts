import { Component, OnInit } from '@angular/core';
import {first} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../services/project.service";

import {Router} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: ProjectService) { }
  addForm: FormGroup;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
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

  }

  onSubmit() {
    this.userService.createProject(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-project']);
      });
  }

}
