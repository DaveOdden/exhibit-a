import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {

  buttonType: string = "menu"; // menu is the default
  buttonTypeChange: Subject<string> = new Subject<string>();

  constructor() { }

  getData(): string {
    return this.buttonType;
  }

  setButtonType( _type: string ): void {
    this.buttonType = _type;
    this.buttonTypeChange.next(this.buttonType);
  }
}
