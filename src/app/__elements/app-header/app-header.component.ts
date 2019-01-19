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
  @Input() headerTitle: string;

  buttonType = 'menu';
  isAuthenticated = false;

  constructor( private store: Store<AppState> ) {
    this.store.select('appState').subscribe(( state: NgRxStore[] ) => {
      this.buttonType = state[0].header.leftButtonType;
      this.isAuthenticated = state[0].auth.id !== '' ? true : false;
    });
  }

  ngOnInit() {
  }

}
