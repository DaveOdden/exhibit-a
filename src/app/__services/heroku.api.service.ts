import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, of, Observable, ObservableInput } from 'rxjs';
import { Action } from '@ngrx/store';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

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
    const http$ = this.http.get<any>(url);

    return http$.pipe(
      catchError( err => {
        //of(`I caught: ${err}`)
        return throwError(err);
      } ),
      catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return of([]);
      }),
      map(this.extractData)
    );
  }

  pingMongo(): Observable<any> {
    const url = `${this.BASE_URL}/ping-mongo`;
    return this.http.get<any>(url).pipe(
      map(this.extractData));
  }

}
