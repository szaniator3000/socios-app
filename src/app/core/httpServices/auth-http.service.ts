import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class AuthHttpService {
  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string): Observable<User> {
    return this.http
      .post<any>('/users/authenticate', { userName, password })
      .pipe(
        map((user) => {
          //store user details and jwt token in local storaage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));

          return user;
        })
      );
  }
}
