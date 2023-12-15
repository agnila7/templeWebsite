import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { EncryptionService } from './encryption.service';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { LoggedInUser, User, UserLoginInfo } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_NAME = 'token';
  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: LoggedInUser | undefined | null;

  constructor(private userService: UserService, private encryptionService: EncryptionService) { 
    this._isLoggedIn$.next( !!this.token);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_NAME);
  }

  isLoggedIn(): boolean{
    return this._isLoggedIn$.value;
  }

  registerNewUser(user: User){
    this.userService.registerUser(user).subscribe({
      next: result=>{
          if(result.token){
            localStorage.setItem(this.TOKEN_NAME, result.token);
            this.user = this.getUser(this.token);
            this._isLoggedIn$.next(true);
            console.log('User registered successfully');
          }
        },
      error: error=>{
        console.log('User could not be registered: ', error);
      }
    })
  }

  loginUser(userLogin: UserLoginInfo){
    userLogin.password = this.encryptionService.encrypt(userLogin.password);
    this.userService.loginUser(userLogin).subscribe({
      next: result=>{
        if(result.token){
          localStorage.setItem(this.TOKEN_NAME, result.token);
          this._isLoggedIn$.next(true);
          this.user = this.getUser(this.token);
          console.log('User Logged In successfully');
        }
      },
      error: error=>{
        console.log('User could not be Logged In: ', error);
      }
    })
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_NAME);
    this._isLoggedIn$.next(false);
    this.user = null;
  }

  private getUser(token: string | null): LoggedInUser | null{
    return token ? jwtDecode(token) : null;
  }
}
