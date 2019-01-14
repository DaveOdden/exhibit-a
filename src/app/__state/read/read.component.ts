import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ngRxStore } from '../../app.interfaces'
import { AppState } from '../../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<ngRxStore[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('appState');
    console.log(this.tutorials );
  }

  ngOnInit() {
  }

}
