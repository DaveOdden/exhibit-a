import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-micro-interactions',
  templateUrl: './micro-interactions.component.html',
  styleUrls: ['./micro-interactions.component.scss']
})
export class MicroInteractionsComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderAttributes({
      title: 'Micro Interactions',
      leftButtonType: 'menu',
      isOffTop: false
    }) );
  }

  ngOnInit() {
  }
}
