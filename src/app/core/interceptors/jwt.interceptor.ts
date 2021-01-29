import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jw token if available
    this.authService.currentUser$.subscribe((currentUser) => {
      if (currentUser && currentUser.jwtToken) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.jwtToken}`,
          },
        });
      }
    });
    return next.handle(req);
  }
}
