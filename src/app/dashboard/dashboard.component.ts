import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

	constructor( private store: Store<AppState> ) {
		console.log('initiate HEADER CHANGE');
    this.store.dispatch(new StateActions.ChangeHeaderTitle('Dashvoard') );
	}

	ngOnInit() {

	}

}
