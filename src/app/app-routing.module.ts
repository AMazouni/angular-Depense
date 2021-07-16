import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import {LoginbenComponent} from "./beneficiaire/login/loginben.component";
import {OrdonnateurComponent} from "./ordonnateur/ordonnateur.component";
import {LoginordComponent} from "./ordonnateur/loginord/loginord.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'beneficiaire', children:[
      {path:'login', component: LoginbenComponent}
    ]},
  {path:'ordonnateur', children:[
      {path:'login', component: LoginordComponent},
      {path:'list', component: OrdonnateurComponent}
    ]},
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
