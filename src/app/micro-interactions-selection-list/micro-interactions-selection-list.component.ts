import { Component, OnInit } from '@angular/core';
import { HeaderStateService } from "../__elements/app-header/header-state.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ngRxStore } from '../app.interfaces'
import * as StateActions from '../__state/state.actions'
import { AppState } from '../app.state';

@Component({
  selector: 'app-micro-interactions-selection-list',
  templateUrl: './micro-interactions-selection-list.component.html',
  styleUrls: ['./micro-interactions-selection-list.component.css']
})
export class MicroInteractionsSelectionListComponent implements OnInit {
  
  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderButtonType( "menu") )
  }

  ngOnInit() {

  }

}
