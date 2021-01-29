import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { APP_ROUTES } from '../routes';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser: User = this.authService.getCurrentUser();
    if (currentUser) return true;
    this.router.navigate([APP_ROUTES.register.path], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
