import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, RoutesRecognized } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { routerTransition } from './app.route-animations';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from './app.interfaces';
import * as StateActions from './__state/state.actions';
import { filter } from 'rxjs/operators';

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

export class AppComponent implements OnInit {

	authIsLoading: boolean = false;
	userIsLoggedIn: boolean = false;
  user;
  
  constructor( private router: Router, private route: ActivatedRoute, private socialAuthService: AuthService, private store: Store<AppState> ) {
    // listen for router start changes. filter() to navigationStart only and subscribe to changes. pipe is used in order to get filter to work.
    //router.events.pipe( filter( event => event instanceof NavigationStart) ).subscribe( (val) => this.routerChange() );
  }

  ngOnInit() {
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  routerChange() {
    this.socialAuthService.authState.subscribe((user) => this.setAuthState( user ) );
  }

  setAuthState( user ) {
    this.user = user;
    this.userIsLoggedIn = (user != null);
    this.authIsLoading = user !== null ? false : true;
    this.store.dispatch(new StateActions.SetAuthState( user ) );
  }

}
