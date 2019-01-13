import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../app.interfaces'
import * as TutorialActions from '../state.actions'
import { AppState } from '../../app.state';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  
  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  ngOnInit() {
  }

}
