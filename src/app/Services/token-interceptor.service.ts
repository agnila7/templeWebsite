import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    if(authService.token){
      let tokenizedReq = req.clone({setHeaders: {Authorization: `Bearer ${authService.token}`}});
      return next.handle(tokenizedReq);
    }else {
      return next.handle(req);
    }
  }
}
