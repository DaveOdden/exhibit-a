import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from './app.interfaces';
import * as StateActions from './__state/state.actions';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router, private store: Store<AppState> ) {}

  stateStore: Observable<NgRxStore[]>;

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    this.stateStore = this.store.select('appState');
    let stateLocal: NgRxStore[];

    this.store.select('appState').subscribe(s => stateLocal = s);
    const userData = JSON.parse( localStorage.getItem('token') );

    console.log('auth guard: ', userData );
    
    if( localStorage.getItem('token') != null ) {
      this.store.dispatch(new StateActions.SetAuthState( userData ) );
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          redirect: state.url
        }
      });
      return false;
    }
  }
}