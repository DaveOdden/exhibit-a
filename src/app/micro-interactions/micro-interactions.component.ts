import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderStateService } from "../__elements/app-header/header-state.service";

@Component({
  selector: 'app-micro-interactions',
  templateUrl: './micro-interactions.component.html',
  styleUrls: ['./micro-interactions.component.css']
})
export class MicroInteractionsComponent implements OnInit {

  constructor(private headerService: HeaderStateService) { }

  ngOnInit() {
    //this.headerService.setButtonType("menu");
  }
}
