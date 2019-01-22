import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces'
import * as StateActions from '../../__state/state.actions'

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];
  // @Input() headerTitle: string;

  headerTitle = 'Exhibit-A';
  buttonType = 'menu';
  isAuthenticated = false;

  constructor( private store: Store<AppState> ) {
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

}
