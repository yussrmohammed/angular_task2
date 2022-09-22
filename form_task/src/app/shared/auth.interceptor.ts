import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private authservice:LoginService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq=req
    const accessToken = this.authservice.getToken();
   if(accessToken != null){
    authReq= req.clone({ headers: req.headers.set('Authorization',  accessToken) })
   }
    return next.handle(authReq);
  }
}
