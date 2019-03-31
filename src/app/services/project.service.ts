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
 // baseUrl  = "http://localhost:3000/projects";
 //baseUrl  = "http://sbaibos.com/sotostheme/api/myprojects7.php";
 baseUrl  = "http://localhost/websites/api/api";
 //baseUrl = "/api";
 delete = "http://localhost/websites/api/delete";
 update="http://localhost/websites/api/update";
 
  
  getProjects(){
   //return  this.http.get('api/');
    return this.http.get(this.baseUrl);
   }
   
   
   getProjectById(id: number) {
    return this.http.get<ProjectModel>(this.baseUrl + '/' + id);
  }

  createProject(project: ProjectModel) {
    return this.http.post(this.baseUrl, project);
  }

  updateProject(project: ProjectModel) {
    return this.http.put(this.update + '/' + project.id, project);
  }

  deleteProject(id: number) {
    return this.http.delete(this.delete + '/' + id);
  }






//that works in an api that takes arguments

// getProjectById(id: number) {
//   return this.http.get(this.basegUrl + '?projectId=' + id);
//}

//that works on my current static array



  }
