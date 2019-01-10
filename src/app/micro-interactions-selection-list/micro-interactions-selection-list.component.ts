import { Component, OnInit } from '@angular/core';
import { HeaderStateService } from "../__elements/app-header/header-state.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-micro-interactions-selection-list',
  templateUrl: './micro-interactions-selection-list.component.html',
  styleUrls: ['./micro-interactions-selection-list.component.css']
})
export class MicroInteractionsSelectionListComponent implements OnInit {

  constructor( private headerService: HeaderStateService, private route: ActivatedRoute, private router: Router) {
    console.log(route.snapshot);
  }

  ngOnInit() {
    this.headerService.setButtonType("menu");
  }

}
