import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];
  // @Input() headerTitle: string;

  headerTitle = 'Exhibit-A';
  buttonType = 'menu';
  isAuthenticated = false;

  constructor( private store: Store<AppState>, private socialAuthService: AuthService ) {
  }

  ngOnInit() {
    this.store.select('appState').subscribe(( state: NgRxStore[] ) => {
      if( state !== undefined ) {
        console.log('changing header title');
        this.buttonType = state[0].header.leftButtonType;
        console.log(state[0].header);
        this.headerTitle = state[0].header.title;
        this.isAuthenticated = state[0].auth.id !== '' ? true : false;
      }
    });
  }

  public googleSignOut() {
		this.socialAuthService.signOut().then(
      (userData) => {
        console.log(userData);
      }
		);
	}

}
