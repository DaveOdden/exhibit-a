import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];

  attrs = {
    headerTitle: 'Exhibit-A',
    buttonType: 'menu',
    isOffTop: false,
    hideButtons: false
  };

  isAuthenticated = false;

  constructor( private store: Store<AppState>, private socialAuthService: AuthService, private _location: Location  ) {
    this.store.select('appState').subscribe(( state: NgRxStore[] ) => {
      if ( state !== undefined ) {
        this.attrs.buttonType = state[0].header.leftButtonType;
        this.attrs.headerTitle = state[0].header.title;
        this.attrs.isOffTop = state[0].header.isOffTop;
        this.attrs.hideButtons = state[0].header.hideButtons;
        this.isAuthenticated = state[0].auth.id !== '' ? true : false;
      }
    });
  }

  ngOnInit() {
  }

  public googleSignOut() {

    this.store.dispatch( new StateActions.LogOut( GoogleLoginProvider.PROVIDER_ID ) ) 

		// this.socialAuthService.signOut().then(
    //   (userData) => {
    //     console.log(userData);
    //   }
		// );
  }
  
  public goToPreviousRoute() {
    this._location.back();
  }

}
