import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ngRxStore, AppState } from '../../app.interfaces'
import * as StateActions from '../state.actions'

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  
  constructor( private store: Store<AppState> ) {}

  addTutorial(name, url) {
    this.store.dispatch(new StateActions.AddTutorial( { name: name, url: url } ) )
  }

  ngOnInit() {
  }

}
