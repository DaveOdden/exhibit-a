
// Boilerplate
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './__state/reducers/state.reducer';


// Third-Party
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular-6-social-login';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { AppHeaderComponent } from './__elements/app-header/app-header.component';
import { DateTraversalComponent } from './__elements/date-traversal/date-traversal.component';
//import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MicroInteractionsComponent } from './micro-interactions/micro-interactions.component';
import {
  MicroInteractionsDisableBtnDuringApiCallComponent
} from './micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './micro-interactions-selection-list/micro-interactions-selection-list.component';

// Other
import * as secrets from '../../credentials.json';
import * as _ from 'lodash';
import { ReadComponent } from './__state/read/read.component';
import { WriteComponent } from './__state/write/write.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './__state/effects/auth.effects';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
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
    NavMenuComponent,
    MicroInteractionsComponent,
    MicroInteractionsDisableBtnDuringApiCallComponent,
    MicroInteractionsSelectionListComponent,
    ReadComponent,
    WriteComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      appState: reducer
    }),
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SocialLoginModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    DragDropModule,
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [ AuthService, {
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
