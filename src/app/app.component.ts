 import { Component } from '@angular/core';
 import { AuthenticationService } from './authentication.service';
 import { Router } from  '@angular/router';
import { UserService } from './user.service';
import { AdminUser } from './models/admin-user.model';
import { AdminAuthGuardService } from './admin-auth-guard.service';



 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers: [AuthenticationService, UserService, AdminAuthGuardService]

 })
 export class AppComponent {
   title = 'app';
   user$;
   adminUser: AdminUser;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(private userService: UserService, public authService: AuthenticationService, private router: Router) {
    this.authService.user$.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        // this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userService.save(user);
        // this.router.navigate([]);
      }
    });
    this.authService.adminUser$.subscribe(adminUser => this.adminUser = adminUser);
  }


  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
