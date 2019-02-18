import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

  authIsRetrieved: boolean = false;
	viewIsLoading: boolean = true;
	authIsLoading: boolean = true;
	userIsLoggedIn: boolean = false;
  user;
  
  constructor( private socialAuthService: AuthService, private store: Store<AppState> ) {
    //this.store.dispatch( new StateActions.RestoreSession()
    this.getState();
    this.setHeaderAttributes();
  }

  ngOnInit() {
  }

  getState() {
    this.store.select('appState').subscribe( ( state: NgRxStore[] ) => {
      if(state[0].auth.id != '') {
        this.userIsLoggedIn = true;
        this.user = state[0].auth;
      }
    } );
  }

  setHeaderAttributes() {
    this.store.dispatch( new StateActions.ChangeHeaderAttributes( {
      title: 'App Status',
      leftButtonType: 'menu',
      isOffTop: false
    } ) );
  }

}
