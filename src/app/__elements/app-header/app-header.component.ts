import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { ngRxStore } from '../../app.interfaces'
import * as StateActions from '../../__state/state.actions'
import { AppState } from '../../app.state';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];
  @Input() headerTitle: string;

  buttonType: string = 'menu';

  constructor( private store: Store<AppState> ) {
    this.store.select('appState').subscribe(( state: ngRxStore[] ) => {
      this.buttonType = state[0].header.leftButtonType;
    });
  }

  ngOnInit() {
  }

}
