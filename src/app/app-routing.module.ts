import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AddProjectComponent} from "./components/add-project/add-project.component";
import {ListProjectComponent} from "./components/list-project/list-project.component";
import {EditProjectComponent} from "./components/edit-project/edit-project.component";

const routes: Routes = [

 { path: 'login', component: LoginComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'list-project', component: ListProjectComponent },
  { path: 'edit-project', component: EditProjectComponent },
  {path : '', component : ListProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
