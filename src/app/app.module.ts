import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { OrdonnateurComponent } from './ordonnateur/ordonnateur.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { LoginbenComponent } from './beneficiaire/login/loginben.component';
import { LoginordComponent } from './ordonnateur/loginord/loginord.component';
import {AgGridModule} from "ag-grid-angular";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    OrdonnateurComponent,
    LoginbenComponent,
    BeneficiaireComponent,
    LoginordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
