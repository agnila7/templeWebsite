import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  template: `Welcome to the Buddhist Temple of Bangladesh.
  <div>
    <a routerLink="/calendar">Event Calendar</a>
  </div>
  <div>
    <a routerLink="/upload/images">Upload Images</a>
  </div>
  <div>
    <a routerLink="/upload/files">Upload Documents</a>
  </div>
  <app-carousel></app-carousel>
  <app-file-downloader></app-file-downloader>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempleWebsite';
  
  constructor(private authService: AuthService){
    //this.authService.registerNewUser({name: 'Chapal', email: 'chapalbuet@gmail.com', password: '12345', role: UserRole.SUPER_ADMIN});
    this.authService.loginUser({email: 'chapalbuet@gmail.com', password: '12345'});
    //this.authService.loginUser({email: 'baruaagnila7@gmail.com', password: '54321'});
  }
}
