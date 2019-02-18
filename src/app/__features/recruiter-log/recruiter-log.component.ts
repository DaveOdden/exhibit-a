import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';

@Component({
  selector: 'app-recruiter-log',
  templateUrl: './recruiter-log.component.html'
})
export class RecruiterLogComponent implements OnInit {

  constructor(private store: Store<AppState>, private socialAuthService: AuthService,) {    
    this.setHeaderAttributes();
  }

  ngOnInit() {
  }

  setHeaderAttributes() {
    this.store.dispatch(new StateActions.ChangeHeaderAttributes({
      title: 'Recruiter Log',
      leftButtonType: 'menu',
      isOffTop: false
    } ) );
  }

}
