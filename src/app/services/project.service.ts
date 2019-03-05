import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import {PROJECTS} from '../mockfiles/mock-project';
import {ProjectModel} from "../models/project.model";
import { HttpClient } from '@angular/common/http'; 

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
  configUrl  = "http://sbaibos.com/sotostheme/myprojects.php";
  //configUrl = 'https://reqres.in/api/users';
  getProjects(){
   return this.http.get(this.configUrl);
}





  }
