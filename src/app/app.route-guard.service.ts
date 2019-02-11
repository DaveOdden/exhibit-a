import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from './app.interfaces';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router, private store: Store<AppState> ) {}

  stateStore: Observable<NgRxStore[]>;

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    this.stateStore = this.store.select('appState');
    let stateLocal: NgRxStore[];

    this.store.select('appState').subscribe(s => stateLocal = s);
    
    console.log('auth guard: ', localStorage.getItem('token') );
    
    if( localStorage.getItem('token') != null ) {
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