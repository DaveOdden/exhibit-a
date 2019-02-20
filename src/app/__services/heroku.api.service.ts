import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { tap, map, switchMap } from 'rxjs/operators';

import { User } from '../app.interfaces';

@Injectable()
export class HerokuApiService {
  private BASE_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  ping(): Observable<any> {
    const url = `${this.BASE_URL}/ping`;
    return this.http.get<any>(url).pipe(
      map(this.extractData));
  }

  pingMongo(): Observable<any> {
    const url = `${this.BASE_URL}/ping-mongo`;
    return this.http.get<any>(url).pipe(
      map(this.extractData));
  }

}
