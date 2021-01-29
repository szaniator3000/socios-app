import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

Injectable();
export class UserHttpService {
  private readonly API: string = 'api/users';
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.API}/${id}`);
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.API + '/register', user);
  }

  removeAll(): Observable<User[]> {
    return this.http.delete<User[]>(this.API + '/removeAllUsers');
  }
}
