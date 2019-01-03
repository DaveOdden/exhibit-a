const _customElementsDefine = window.customElements.define;
window.customElements.define = (name, cl, conf) => {
  if (!customElements.get(name)) {
    _customElementsDefine.call(window.customElements, name, cl, conf);
  }
  else {
    console.warn(`${name} has been defined twice`);
  }
};

// Boilerplate
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

// Third-Party
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';

import * as secrets from '../../credentials.json';
import { AppHeaderComponent } from './__elements/app-header/app-header.component';
import { DateTraversalComponent } from './__elements/date-traversal/date-traversal.component';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MicroInteractionsComponent } from './micro-interactions/micro-interactions.component';
import { MicroInteractionsDisableBtnDuringApiCallComponent } from './micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './micro-interactions-selection-list/micro-interactions-selection-list.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [ {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(secrets.default.web.client_id)
    } ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatusComponent,
    AppHeaderComponent,
    DateTraversalComponent,
    LoginComponent,
    NavMenuComponent,
    MicroInteractionsComponent,
    MicroInteractionsDisableBtnDuringApiCallComponent,
    MicroInteractionsSelectionListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SocialLoginModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
}