import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new StateActions.ChangeHeaderAttributes({
      leftButtonType: 'menu',
      isOffTop: true
    }) );
  }

  ngOnInit() {
  }

}
