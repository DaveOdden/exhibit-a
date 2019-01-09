import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {

  buttonType: string = "menu"; // menu is the default

  constructor() { }

  getData(): Observable<string> {
    return of(this.buttonType);
  }

  setButtonType( _type: string ): void {
    this.buttonType = _type;
  }
}
