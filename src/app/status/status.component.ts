import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState, selectAuthState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';
import { HerokuApiService } from '../__services/heroku.api.service';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-status',
	styleUrls: ['./status.component.scss'],
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
  
	userIsLoggedIn: boolean = false;
  username: string;
  user;

  isConnectedToHeroku = false;
  herokuAppName: string;
  isConnectedToMongo = false;
  mongoDbName: string;
  loginFrequencyDates: Array<Object>;
  
  constructor( private socialAuthService: AuthService, private store: Store<AppState>, private herokuApi: HerokuApiService ) {
    this.setAuthState();
    this.setHeaderAttributes();
    this.getLoginFrequency();

  }

  ngOnInit() {
    this.pingHeroku();
    this.pingMongo();
  }

  pingHeroku() {
    this.herokuApi.ping().subscribe( (res) => {
      this.isConnectedToHeroku = res.success;
      this.herokuAppName = res.appName;
    }, ( err ) => {
      console.log(err);
    } );
  }

  pingMongo() {
    this.herokuApi.pingMongo().subscribe( (res) => {
      this.isConnectedToMongo = res.success;
      this.mongoDbName = res.dbName;
    }, ( err ) => {
      console.log(err);
    } );    
  }

  getLoginFrequency() {
    this.herokuApi.getLoginFrequency().subscribe( (res) => {
      this.loginFrequencyDates = res;
      // console.log(res);
      // let resProps = Object.keys(res.data);
      // this.loginFrequencyDates = [];
      // for ( let prop of resProps) { 
      //   this.loginFrequencyDates.push( res.data[prop] );
      // }
      console.log(this.loginFrequencyDates);
    }, ( err ) => {
      console.log(err);
    } );
  }

  setAuthState() {
    this.store.select('appState').subscribe( ( state: NgRxStore[] ) => {
      if(state[0].auth.id != '') {
        this.userIsLoggedIn = true;
        this.user = state[0].auth;
      }
    } );
  }

  setHeaderAttributes() {
    this.store.dispatch( new StateActions.ChangeHeaderAttributes( {
      title: 'App Status',
      leftButtonType: 'menu',
      isOffTop: false
    } ) );
  }

}
