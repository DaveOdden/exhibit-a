import { Component, OnInit } from '@angular/core';
import { HeaderStateService } from "../__elements/app-header/header-state.service";
import { Store } from '@ngrx/store';
import { ngRxStore } from '../app.interfaces'
import * as StateActions from '../__state/state.actions'
import { AppState } from '../app.state';

import '@vaadin/vaadin-button';

@Component({
  selector: 'app-micro-interactions-disable-btn-during-api-call',
  templateUrl: './micro-interactions-disable-btn-during-api-call.component.html',
  styleUrls: ['./micro-interactions-disable-btn-during-api-call.component.css']
})
export class MicroInteractionsDisableBtnDuringApiCallComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderButtonType( "back") )
  }

  ngOnInit() {
  }

}
