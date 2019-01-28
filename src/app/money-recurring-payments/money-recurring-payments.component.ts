import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-money-recurring-payments',
  templateUrl: './money-recurring-payments.component.html',
  styleUrls: ['./money-recurring-payments.component.scss']
})
export class MoneyRecurringPaymentsComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderButtonType('back') );
  }

  ngOnInit() {
  }

}
