import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';
import { ActivatedRoute } from '@angular/router';
import { LocalAuthService } from '../__services/auth.service';

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
	userJustLoggedOut = false;
	googleUserData = [];
	user;

	urlRedirect: string;

	constructor( private store: Store<AppState>, private socialAuthService: AuthService, private authService: LocalAuthService, private route: ActivatedRoute ) {
		this.userIsLoggedIn = authService.isLoggedIn();
		this.getState();
		this.setRedirectParam();
		this.handleLoggedOutQueryString();
		this.setHeaderAttributes();
	}

	ngOnInit() {
		this.viewIsLoading = false;
	}

	getState() {
		this.store.select('appState').subscribe( ( state: NgRxStore[] ) => {
			this.userIsLoggedIn = false;
			if(state[0].auth.id != '') {
				this.userIsLoggedIn = true;
				this.user = state[0].auth;
				this.googleUserData = this.createKeyVals( this.user );
			}
		} );
	}

	setRedirectParam() {
		this.route.queryParams.subscribe(params => {
			this.urlRedirect = params['redirect'];
		} );
	}

	setHeaderAttributes() {
		this.store.dispatch(new StateActions.ChangeHeaderAttributes({
			title: 'Login',
			hideButtons: true
    }) );
	}

  googleSignIn() {
		console.log('1. Login Component');
		this.store.dispatch( new StateActions.LogIn( GoogleLoginProvider.PROVIDER_ID ) ) 
		//this.socialAuthService.signIn( GoogleLoginProvider.PROVIDER_ID ).then( (userData) => this.store.dispatch(new StateActions.LogIn( userData ) ) );
	}

	googleSignOut() {
		this.socialAuthService.signOut().then( (userData) => this.store.dispatch(new StateActions.SetAuthState( this.user ) ) );
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

	handleLoggedOutQueryString() {
		this.route.queryParams.subscribe(params => {
			this.userJustLoggedOut = params['loggedout'];
		} );
	}

}
