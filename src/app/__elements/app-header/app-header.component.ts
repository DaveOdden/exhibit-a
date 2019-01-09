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
  @Input() goBack: boolean;

  heroes: string;

  constructor( HeaderService: HeaderStateService ) {
    HeaderService.getData().subscribe( heroes => {
      console.log("subscribed: " + heroes);
      this.heroes = heroes
    } );
  }

  ngOnInit() {
  }

}
