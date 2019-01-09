import { Component, OnInit } from '@angular/core';
import { HeaderStateService } from "../__elements/app-header/header-state.service";

import '@vaadin/vaadin-button';

@Component({
  selector: 'app-micro-interactions-disable-btn-during-api-call',
  templateUrl: './micro-interactions-disable-btn-during-api-call.component.html',
  styleUrls: ['./micro-interactions-disable-btn-during-api-call.component.css']
})
export class MicroInteractionsDisableBtnDuringApiCallComponent implements OnInit {

  constructor(private headerService: HeaderStateService) { }

  ngOnInit() {
    this.headerService.setButtonType("back");
  }

}
