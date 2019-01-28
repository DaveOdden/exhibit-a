import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, RoutesRecognized } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { routerTransition } from './app-route.animations';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from './app.interfaces';
import * as StateActions from './__state/state.actions';

import '@vaadin/vaadin-item/vaadin-item';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

	// authIsLoading: boolean = true;
	// userIsLoggedIn: boolean = false;
	// user;

  constructor( private socialAuthService: AuthService, private router: Router, private store: Store<AppState> ) {
    // console.log('in app component');
		// this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
		// 	this.userIsLoggedIn = (user != null);
		// 	this.authIsLoading = user !== null ? false : true;
    // });
    router.events.subscribe((val) => {
      // console.log('router event');
      // console.log(val); 
      if(val instanceof NavigationEnd) {
        //this.store.dispatch(new StateActions.ChangeHeaderTitle('Fart Knocker') );
        this.store.dispatch(new StateActions.ChangeHeaderAttributes(<any>val) );
      }
    });
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  

}
