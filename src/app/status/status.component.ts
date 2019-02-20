import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState, selectAuthState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';
import { HerokuApiService } from '../__services/heroku.api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
	styleUrls: ['./status.component.scss'],
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

  authIsRetrieved: boolean = false;
	viewIsLoading: boolean = true;
  authIsLoading: boolean = true;
  

	userIsLoggedIn: boolean = false;
  username: string;
  user;
  isConnectedToHeroku = false;
  
  constructor( private socialAuthService: AuthService, private store: Store<AppState>, private herokuApi: HerokuApiService ) {

    //this.store.dispatch( new StateActions.RestoreSession()
    this.getState();
    this.setHeaderAttributes();

    this.store.select('appState').subscribe((state) => {
      console.log(state);
    });
  }

  ngOnInit() {
    this.herokuApi.ping().subscribe((res) => {
      console.log(res);
      this.isConnectedToHeroku = res;
    });
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
