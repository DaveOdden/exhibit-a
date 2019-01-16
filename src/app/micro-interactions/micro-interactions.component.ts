import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { ngRxStore } from '../app.interfaces'
import * as StateActions from '../__state/state.actions'
import { AppState } from '../app.state';

@Component({
  selector: 'app-micro-interactions',
  templateUrl: './micro-interactions.component.html',
  styleUrls: ['./micro-interactions.component.css']
})
export class MicroInteractionsComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderButtonType( "menu") )
  }

  ngOnInit() {
  }
}
