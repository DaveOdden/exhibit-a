import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-micro-interactions-selection-list',
  templateUrl: './micro-interactions-selection-list.component.html',
  styleUrls: ['./micro-interactions-selection-list.component.scss']
})
export class MicroInteractionsSelectionListComponent implements OnInit {

  constructor( private store: Store<AppState> ) {
    this.store.dispatch(new StateActions.ChangeHeaderTitle('Test') );
  }

  ngOnInit() {

  }

}
