import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exhibit-a';

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
}
