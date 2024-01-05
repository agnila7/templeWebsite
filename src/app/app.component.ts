import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { UserRole } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <button mat-button routerLink="/">Home</button>
    <button mat-button [matMenuTriggerFor]="about">
      <div class="valign-center">
        <span>About Us</span>
        <mat-icon>arrow_drop_down</mat-icon>
      </div>
    </button>
    <button mat-button [matMenuTriggerFor]="media">
      <div class="valign-center">
        <span>Media</span>
        <mat-icon>arrow_drop_down</mat-icon>
      </div>
    </button>
    <button mat-button routerLink="/calendar/events">Events</button>
    <button mat-button>News</button>
    <button mat-button>Blog</button>
    <button mat-button routerLink="/contact">Contact</button>
    <button mat-button>Donate</button>
    <button *ngIf="!loggedIn" mat-button routerLink="/login">Register/Login</button>
    <button *ngIf="loggedIn" mat-button (click)="logOut()" class="right-aligned-button">LogOut</button>
  </div>

  <app-home *ngIf=showHome></app-home><br><br><br><br>

  <mat-menu #media="matMenu">
    <button mat-menu-item *ngIf="!hideNonAdminMenu" routerLink="/upload/images">Upload Images</button>
    <button mat-menu-item *ngIf="!hideNonAdminMenu" routerLink="/upload/files">Upload Documents</button>
    <button mat-menu-item routerLink="/download/files">Download Documents</button>
    <button mat-menu-item routerLink="/media/gallery">Photo Gallery</button>
  </mat-menu>


  <mat-menu #about="matMenu">
    <button mat-menu-item [matMenuTriggerFor]="bso" >BSO</button>
    <button mat-menu-item [matMenuTriggerFor]="temple">Temple</button>
  </mat-menu>

  <mat-menu #bso="matMenu">
    <button mat-menu-item routerLink="/bso">About BSO</button>
    <button mat-menu-item routerLink="/committee">BSO Commitee</button>
    <button mat-menu-item routerLink="/trustee">Trustee</button>
    <button mat-menu-item>BSO Annual Report</button>
  </mat-menu>

  <mat-menu #temple="matMenu">
    <button mat-menu-item routerLink="/temple">About temple</button>
    <button mat-menu-item [matMenuTriggerFor]="joinUs">Join Us</button>
    <button mat-menu-item routerLink="/calendar/alms">Daily Alms/Puja Schedule</button>
  </mat-menu>
  <mat-menu #joinUs="matMenu">
    <button mat-menu-item routerLink="welcome">All Are Welcome</button>
    <button mat-menu-item (click)="downloadMembershipForm()">MemeberShip</button>
  </mat-menu>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TempleWebsite';
  showHome = false;
  showLogOut = false;
  loggedIn = false;
  hideNonAdminMenu = true;
  
  constructor(private router: Router, private authService: AuthService){
    //this.authService.registerNewUser({name: 'Chapal', email: 'chapalbuet@gmail.com', password: '12345', role: UserRole.SUPER_ADMIN});
    //this.authService.loginUser({email: 'chapalbuet@gmail.com', password: '12345'});
    //this.authService.loginUser({email: 'baruaagnila7@gmail.com', password: '54321'});
   
    
  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.showHome = event.url === '/';
      }
    });

    // if token exist - assumed user is logged in
    if(this.authService.token){
      this.loggedIn = true;
      this.showOrHideNonAdminMenu();
    }

    this.authService.isLoggedIn$.subscribe(logIn=>{
      this.loggedIn = logIn;
      this.showOrHideNonAdminMenu();
    })
  }

  downloadMembershipForm(){
    const link = document.createElement('a');
    link.download = "MemberShipForm.pdf";
    link.href = "assets/MemberShipForm.pdf";
    link.click();
    link.remove();
  }

  logOut(){
    this.authService.logOut();
  }

  showOrHideNonAdminMenu(){
    if(this.authService.user?.role === UserRole.ADMIN || this.authService.user?.role === UserRole.SUPER_ADMIN){
      this.hideNonAdminMenu = false;
    }else{
      this.hideNonAdminMenu = true;
    }
  }
}
