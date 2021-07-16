import { Component, OnInit } from '@angular/core';

import {TokenStorageService} from "../../_services/token-storage.service";
import {Auth_ben_ServiceService} from "../../_services/auth.ben.service.service";

@Component({
  selector: 'app-loginben',
  templateUrl: './loginben.component.html',
  styleUrls: ['./loginben.component.css']
})
export class LoginbenComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string = '';
  username: string = '';

  constructor(private authService: Auth_ben_ServiceService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().type;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().type;
        this.username = this.tokenStorage.getUser().login;
        console.log(data+" "+this.roles+" User : "+this.tokenStorage.getUser())
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
