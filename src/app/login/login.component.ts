import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	authIsRetrieved = false;
	viewIsLoading = true;
	authIsLoading = true;
	userIsLoggedIn = false;
	googleUserData = [];
	user;

	urlRedirect: string;

	constructor(
			private store: Store<AppState>,
			private socialAuthService: AuthService,
			private route: ActivatedRoute
	) {

		this.route.queryParams.subscribe(params => {
			console.log(params);
			this.urlRedirect = params['redirect'];
			console.log(this.urlRedirect);
		} );

		this.socialAuthService.authState.subscribe((user) => {
			this.user = user;
			this.userIsLoggedIn = (user != null);
			this.googleUserData = user !== null ? this.createKeyVals(user) : [];
			this.authIsLoading = user !== null ? false : true;
			this.authIsRetrieved = user !== null ? false : true;
			this.store.dispatch(new StateActions.SetAuthState( user ) );
		} );

		this.store.dispatch(new StateActions.ChangeHeaderAttributes({
			title: 'Login',
      leftButtonType: 'menu',
      isOffTop: false
    }) );
	}


	ngOnInit() {
		this.viewIsLoading = false;
	}

	private createKeyVals( obj ) {

		const returnVal = [];
		const keys = Object.keys(obj);

		for ( const prop of keys ) {
			returnVal.push({
				key: prop,
				val: obj[prop]
			});
		}

		return returnVal;
	}

  public googleSignIn() {
    this.socialAuthService.signIn( GoogleLoginProvider.PROVIDER_ID ).then( (userData) => {
			this.googleUserData = this.createKeyVals( userData );
		} );
	}

	public googleSignOut() {
		this.socialAuthService.signOut().then(
      (userData) => {
				console.log(userData);
				console.log(this.user);
				this.store.dispatch(new StateActions.SetAuthState( this.user ) );
      }
		);
	}
}
