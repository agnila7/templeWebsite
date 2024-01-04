import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { NavigationStart, Router } from '@angular/router';

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
  </div>

  <app-home *ngIf=showHome></app-home><br><br><br><br>

  <mat-menu #media="matMenu">
    <button mat-menu-item routerLink="/upload/images">Upload Images</button>
    <button mat-menu-item routerLink="/upload/files">Upload Documents</button>
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
export class AppComponent {
  title = 'TempleWebsite';
  showHome = false;
  
  constructor(private authService: AuthService, private router: Router){
    //this.authService.registerNewUser({name: 'Chapal', email: 'chapalbuet@gmail.com', password: '12345', role: UserRole.SUPER_ADMIN});
    this.authService.loginUser({email: 'chapalbuet@gmail.com', password: '12345'});
    //this.authService.loginUser({email: 'baruaagnila7@gmail.com', password: '54321'});
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.showHome = event.url === '/';
      }
    })
  }

  downloadMembershipForm(){
    const link = document.createElement('a');
    link.download = "MemberShipForm.pdf";
    link.href = "assets/MemberShipForm.pdf";
    link.click();
    link.remove();
  }
}
