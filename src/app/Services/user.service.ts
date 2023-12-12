import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any>{
    
    return this.http.post(registerUserUrl, user);
  }

  loginUser(userLogin: UserLoginInfo): Observable<any>{
    
    return this.http.post(loginUserUrl, userLogin);
  }
}


// export interface User extends UserLoginInfo{
//   name: string;
// }

// export interface UserLoginInfo {
//   email: string;
//   password: string
// }

export interface User{
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
export enum UserRole {
  ADMIN = 'Admin',
  SUPER_ADMIN = 'Super Admin',
  GENERAL_USER = 'General User'
}

export type UserLoginInfo = Pick<User, 'email' | 'password'>;

export type LoggedInUser = Omit<User, 'password'>;

export const httpUrl = 'https://localhost:3000/api/';
export const registerUserUrl = httpUrl + 'auth/register/';
export const loginUserUrl = httpUrl + 'auth/login/';


