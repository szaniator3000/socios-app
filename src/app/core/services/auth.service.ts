import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthHttpService } from '../httpServices/auth-http.service';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly CURRENT_USER = 'currentUser';
  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  currentUser$: Observable<User> = this.currentUser.asObservable();
  constructor(private authHttpService: AuthHttpService) {}

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER);
    this.currentUser.next(null);
  }

  login(userName: string, password: string): void {
    this.authHttpService.loginUser(userName, password).pipe(
      map((user) => {
        // add current user to local storage
        localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
        this.currentUser.next(user);
      })
    );
  }
}
