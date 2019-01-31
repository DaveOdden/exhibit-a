import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';
import { Location } from '@angular/common';

/**
 * Class constructor
 */
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];

  headerTitle = 'Exhibit-A';
  buttonType = 'menu';
  isAuthenticated = false;
  isOffTop = false;

  constructor( private store: Store<AppState>, private socialAuthService: AuthService, private _location: Location  ) {
  }

  ngOnInit() {
    this.store.select('appState').subscribe(( state: NgRxStore[] ) => {
      if ( state !== undefined ) {
        this.buttonType = state[0].header.leftButtonType;
        this.headerTitle = state[0].header.title;
        this.isOffTop = state[0].header.isOffTop;
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
  
  public goToPreviousRoute() {
    this._location.back();
  }

}
