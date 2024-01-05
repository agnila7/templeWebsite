import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

// redirects user to home page if already logged In. to be used to redirect user from login page if already logged in
@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return this.authService.isLoggedIn();
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
  } else {
      return true;
  }
  }
}
