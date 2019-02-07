import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgRxStore, AppState, selectAuthState } from '../../app.interfaces'
import { LogIn } from '../../__state/auth.actions';
import { User } from '../../app.interfaces';
import { State } from 'src/app/__state/reducers/auth.reducer';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
} )
export class LoginComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor( private store: Store<State> ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      if( state !== undefined && state.hasOwnProperty('errorMessage'))
      this.errorMessage = state.errorMessage;
    });

    // this.store.select('appState').subscribe(( state: NgRxStore[] ) => {
    //   if( state !== undefined && state.hasOwnProperty('errorMessage'))
    //     this.errorMessage = state.errorMessage;
    // });
  };

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
