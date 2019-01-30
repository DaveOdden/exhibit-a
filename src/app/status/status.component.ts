import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  authIsRetrieved: boolean = false;
	viewIsLoading: boolean = true;
	authIsLoading: boolean = true;
	userIsLoggedIn: boolean = false;
  user;
  
  constructor( private socialAuthService: AuthService, private store: Store<AppState> ) {
    this.socialAuthService.authState.subscribe((user) => {
			console.log(user);
      this.user = user;
			this.userIsLoggedIn = (user != null);
			this.authIsLoading = user !== null ? false : true;
			this.authIsRetrieved = user !== null ? false : true;
    });

    this.store.dispatch(new StateActions.ChangeHeaderAttributes({
      title: 'App Status',
      leftButtonType: 'menu',
      isOffTop: false
    }) );
  }

  ngOnInit() {
  }

}
