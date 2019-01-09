import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-micro-interactions',
  templateUrl: './micro-interactions.component.html',
  styleUrls: ['./micro-interactions.component.css']
})
export class MicroInteractionsComponent implements OnInit {

  //@Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    //this.notify.emit("back");
  }

  ngOnInit() {

  }
}
