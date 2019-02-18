import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
//import { LocalAuthService } from '../../__services/auth.service';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';

// import {
//   AuthActionTypes,
//   LogIn, LogInSuccess, LogInFailure,
//   SignUp, SignUpSuccess, SignUpFailure, LogOut
// } from '../auth.actions';

import { StateActionTypes, LogIn, LogInSuccess, LogInFailure } from '../state.actions';

@Injectable()
export class StateEffects {

  constructor(
    private actions: Actions,
    private socialAuthService: AuthService, 
    private router: Router,
  ) {}

  @Effect()
  Login: Observable<any> = this.actions.pipe(
		ofType( StateActionTypes.LOGIN ),
		map( (action: LogIn) => action.payload ),
    switchMap( googleId => {
			console.log('4A. LogIn Effect');
			return ( 
				this.socialAuthService
				.signIn( googleId )
				.then( (userData) => {
					console.log('   4B. LogIn Effect Promise');
					return new LogInSuccess( userData );
				} )
				.catch((err) => {
					console.log('   4B. LogIn Effect Catch');
					return new LogInFailure( err );
				} )
			)
  } ) );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(StateActionTypes.LOGIN_SUCCESS),
    tap((user) => {
			console.log('6. Login Success');
			//console.log(user.payload);
      localStorage.setItem('token', JSON.stringify(user.payload));
      this.router.navigateByUrl('/status');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(StateActionTypes.LOGIN_FAILURE)
  );

  // @Effect({ dispatch: false })
  // public LogOut: Observable<any> = this.actions.pipe(
  //   ofType(AuthActionTypes.LOGOUT),
  //   tap((user) => {
  //     localStorage.removeItem('token');
  //   })
  // );

}
