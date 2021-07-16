import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string ='';
  isLoggedIn = false;
  showAdminBoard = false;
  showOrdonnateurBoard = false;
  showBeneficiaireBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.type;

      this.showAdminBoard = (this.roles=='admin' ? true:false);
      this.showOrdonnateurBoard = (this.roles=='ordonnateur' ? true:false);
      this.showBeneficiaireBoard = (this.roles=='beneficiaire' ? true:false);
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
