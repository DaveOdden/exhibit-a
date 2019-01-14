import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderStateService } from "./header-state.service";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() secondaryNavItems: Array<string> = [];
  @Input() headerTitle: string;

  buttonType: string;

  constructor( HeaderService: HeaderStateService ) {
    this.buttonType = HeaderService.getData();
    HeaderService.buttonTypeChange.subscribe( newVal => {
      //console.log("subscribed: " + newVal);
      this.buttonType = newVal;
    } );
  }

  ngOnInit() {
  }

}
