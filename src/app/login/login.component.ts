import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	authIsRetrieved: boolean = false;
	viewIsLoading: boolean = true;
	authIsLoading: boolean = true;
	userIsLoggedIn: boolean = false;
	googleUserData = [];
	user;

  constructor( private socialAuthService: AuthService ) {
		this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
			this.userIsLoggedIn = (user != null);
			this.googleUserData = user !== null ? this.createKeyVals(user) : [];
			this.authIsLoading = user !== null ? false : true;
			this.authIsRetrieved = user !== null ? false : true;
    });
  }

  ngOnInit() {
		this.viewIsLoading = false;
	}
	
	private createKeyVals( obj ) {

		let returnVal = [];
		let keys = Object.keys(obj);
			
		for ( let prop of keys ) { 
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
      }
		);
	}
}
