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

  constructor( private socialAuthService: AuthService, private router: Router, private store: Store<AppState> ) {
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  

}
