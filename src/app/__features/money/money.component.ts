import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.interfaces';
import * as StateActions from '../../__state/state.actions';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html'
})
export class MoneyComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new StateActions.ChangeHeaderAttributes({
      title: 'Money',
      leftButtonType: 'menu',
      isOffTop: false
    }) );
  }

  ngOnInit() {
  }

}
