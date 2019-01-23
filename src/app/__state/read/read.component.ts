import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgRxStore, AppState } from '../../app.interfaces';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<NgRxStore[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('appState');
  }

  ngOnInit() {
  }

}
