import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { tap, map, switchMap } from 'rxjs/operators';

import { User } from '../app.interfaces';

@Injectable()
export class LocalAuthService {
  private BASE_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) {}

  getToken(): string {
    console.log('getting token: auth.service.ts');
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, { email, password});
  }

  isLoggedIn() {
    return localStorage.getItem('token') != '' ? true : false;
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, {email, password});
  }
}
