/*

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler,HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { AuthenticationService } from '../authentication.service';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request).catch(error => {
    //     return Observable.throw(error);
		// } );
		// const authReq = request.clone({
		// 	headers: request.headers.set('authorization', Authorization ? Authorization : '')
		// });

		// return next.handle(authReq).pipe( catchError(error => {
		// 	// checks if a url is to an admin api or not
		// 	if (error.status === 401) {
		// 		// attempting to refresh our token
		// 	}
		// } ) );
  }
}


, {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true
		}
		

*/