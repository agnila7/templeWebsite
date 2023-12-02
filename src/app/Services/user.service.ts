import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any>{
    let registerUserUrl = httpUrl + 'auth/register/';
    return this.http.post(registerUserUrl, user);
  }
}

export interface User {
  name: string;
  email: string;
  age: number;
  password: string;
}

export const httpUrl = 'http://localhost:3000/api/';
