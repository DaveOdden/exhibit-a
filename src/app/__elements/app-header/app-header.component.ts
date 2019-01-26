import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';

/**
 * Class constructor
 */
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  /**
   * Incoming list of secondary navigation items
   */
  @Input() secondaryNavItems: Array<string> = [];

  /**
   * default title in header
   */
  headerTitle = 'Exhibit-A';

  /**
   * string of button type
   */
  buttonType = 'menu';

  /**
   * user authenticated flag
   */
  isAuthenticated = false;

  constructor( private store: Store<AppState>, private socialAuthService: AuthService ) {
  }

  /**
   * Angular component is ready
   */
  ngOnInit() {
    this.store.select('appState').subscribe(( state: NgRxStore[] ) => {
      if ( state !== undefined ) {
        console.log('changing header title');
        this.buttonType = state[0].header.leftButtonType;
        console.log(state[0].header);
        this.headerTitle = state[0].header.title;
        this.isAuthenticated = state[0].auth.id !== '' ? true : false;
      }
    });
  }

  /**
   * Sign user out of their Google acount
   */
  public googleSignOut() {
		this.socialAuthService.signOut().then(
      (userData) => {
        console.log(userData);
      }
		);
	}

}
