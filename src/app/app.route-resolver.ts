import { Injectable } from '@angular/core';
import { LocalAuthService } from './__services/auth.service';
import { Resolve } from '@angular/router';

@Injectable()
export class AuthResolver implements Resolve<any> {
  
  constructor( private authService: LocalAuthService ) {}

  resolve() {
    return this.authService.getToken();
  }
}