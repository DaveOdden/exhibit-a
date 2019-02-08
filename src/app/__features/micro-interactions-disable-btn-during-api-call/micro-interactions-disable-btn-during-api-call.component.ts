import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';

import '@vaadin/vaadin-button';

@Component({
  selector: 'app-micro-interactions-disable-btn-during-api-call',
  templateUrl: './micro-interactions-disable-btn-during-api-call.component.html',
  styleUrls: ['./micro-interactions-disable-btn-during-api-call.component.scss']
})
export class MicroInteractionsDisableBtnDuringApiCallComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderButtonType('back') );
  }

  ngOnInit() {
  }

}
