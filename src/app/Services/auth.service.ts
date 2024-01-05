import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { EncryptionService } from './encryption.service';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { LoggedInUser, User, UserLoginInfo } from '../models/user.model';
import { Router } from '@angular/router';
import { NotificationService, NotificationType } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_NAME = 'token';
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userService: UserService, private encryptionService: EncryptionService, private router: Router, private notificationService: NotificationService) { 
    this.isLoggedIn$.next( !!this.token);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_NAME);
  }

  isLoggedIn(): boolean{
    return this.isLoggedIn$.value;
  }

  registerNewUser(user: User){
    this.userService.registerUser(user).subscribe({
      next: result=>{
          if(result.token){
            localStorage.setItem(this.TOKEN_NAME, result.token);
            this.isLoggedIn$.next(true);
            this.notificationService.sendMessage({message: 'User registered successfully', type: NotificationType.success});
            this.router.navigateByUrl('/');
          }
        },
      error: error=>{
        this.notificationService.sendMessage({message: 'User could not be registered: ' + error.error.msg, type: NotificationType.error});
      }
    })
  }

  loginUser(userLogin: UserLoginInfo){
    userLogin.password = this.encryptionService.encrypt(userLogin.password);
    this.userService.loginUser(userLogin).subscribe({
      next: result=>{
        if(result.token){
          localStorage.setItem(this.TOKEN_NAME, result.token);
          this.isLoggedIn$.next(true);
          this.notificationService.sendMessage({message: 'User Logged In successfully', type: NotificationType.success});
          this.router.navigateByUrl('/');
        }
      },
      error: error=>{
        this.notificationService.sendMessage({message: 'User could not be Logged In: ' + error.error.msg, type: NotificationType.error});
      }
    })
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_NAME);
    this.isLoggedIn$.next(false);
    this.router.navigateByUrl('/login');
    this.notificationService.sendMessage({message: 'Logged Out Successfully', type: NotificationType.success});
  }

  public get user(): LoggedInUser | null{
    return this.token ? jwtDecode(this.token) : null;
  }
}
