import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';

@Component({
  selector: 'app-money-selection-list',
  templateUrl: './money-selection-list.component.html',
  styleUrls: ['./money-selection-list.component.scss']
})
export class MoneySelectionListComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderButtonType('menu') );
  }

  ngOnInit() {
  }

}
