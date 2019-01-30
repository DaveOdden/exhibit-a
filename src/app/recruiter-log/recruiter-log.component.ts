import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import * as StateActions from '../__state/state.actions';

@Component({
  selector: 'app-recruiter-log',
  templateUrl: './recruiter-log.component.html',
  styleUrls: ['./recruiter-log.component.scss']
})
export class RecruiterLogComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new StateActions.ChangeHeaderAttributes({
      title: 'Recruiter Log',
      leftButtonType: 'menu',
      isOffTop: false
    }) );
  }

  ngOnInit() {
  }

}
