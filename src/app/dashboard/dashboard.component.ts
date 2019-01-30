import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

	constructor( private store: Store<AppState> ) {
		this.store.dispatch(new StateActions.ChangeHeaderAttributes({
			title: 'Dashboard',
      leftButtonType: 'menu',
      isOffTop: false
    }) );
	}

	ngOnInit() {

	}

}
