import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderStateService } from "./header-state.service";
import { Store } from '@ngrx/store';
import { ngRxStore } from '../../app.interfaces'
import * as StateActions from '../../__state/state.actions'
import { AppState } from '../../app.state';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];
  @Input() headerTitle: string;

  buttonType: string = 'menu';

  constructor( HeaderService: HeaderStateService, private store: Store<AppState> ) {
    // this.buttonType = HeaderService.getData();
    // HeaderService.buttonTypeChange.subscribe( newVal => {
    //   //console.log("subscribed: " + newVal);
    //   this.buttonType = newVal;
    // } );
    this.store.select('appState').subscribe(( state: ngRxStore[] ) => {
      console.log('-- HEADER COMPONENT --')
      console.log(state);
      console.log();
      this.buttonType = state[0].header.leftButtonType;
    });
  }

  ngOnInit() {
  }

}
