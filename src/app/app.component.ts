import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { routerTransition } from './app-route.animations';
import '@vaadin/vaadin-item/vaadin-item';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	// authIsLoading: boolean = true;
	// userIsLoggedIn: boolean = false;
	// user;

  constructor( private socialAuthService: AuthService ) {
    // console.log('in app component');
		// this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
		// 	this.userIsLoggedIn = (user != null);
		// 	this.authIsLoading = user !== null ? false : true;
    // });
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
