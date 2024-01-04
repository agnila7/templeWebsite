import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../templeSitePages/email-form/email-form.component';
import { ServerUrl } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = ServerUrl + 'email';

  constructor(private http: HttpClient) { }

  sendEmail(email: Email) {
    return this.http.post(this.emailUrl, email);
  }

}