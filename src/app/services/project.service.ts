import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import {PROJECTS} from '../mockfiles/mock-project';
import {ProjectModel} from "../models/project.model";
import { HttpClient } from '@angular/common/http'; 
import { pureObjectDef } from '@angular/core/src/view';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
projects: ProjectModel[];
  //projects = PROJECTS;//projects mockfile
  
  firstClick() {
    return console.log('clicked');
  }



  

  constructor(private http: HttpClient) { }
  basegUrl  = "/api/";
  //configUrl = 'https://reqres.in/api/users';
  api = 'api';
  getProjects(){
   //return  this.http.get('api/');
    return this.http.get('/api')
   }
//that works in an api that takes arguments

// getProjectById(id: number) {
//   return this.http.get(this.basegUrl + '?projectId=' + id);
//}

//that works on my current static array



  }
