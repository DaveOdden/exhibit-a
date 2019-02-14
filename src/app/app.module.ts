// Boilerplate
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

// Third-Party
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular-6-social-login';

import {
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route.module';

// Elements
import { AppHeaderComponent } from './__elements/app-header/app-header.component';
import { DateTraversalComponent } from './__elements/date-traversal/date-traversal.component';

// Views
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StatusComponent } from './status/status.component';
import { MicroInteractionsComponent } from './__features/micro-interactions/micro-interactions.component';
import { MicroInteractionsDisableBtnDuringApiCallComponent } from './__features/micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './__features/micro-interactions-selection-list/micro-interactions-selection-list.component';
import { MoneyComponent } from './__features/money/money.component';
import { MoneySelectionListComponent } from './__features/money-selection-list/money-selection-list.component';
import { MoneyRecurringPaymentsComponent } from './__features/money-recurring-payments/money-recurring-payments.component';
import { MoneyCreditCardsComponent } from './__features/money-credit-cards/money-credit-cards.component';
import { RecruiterLogComponent } from './__features/recruiter-log/recruiter-log.component';
import { RecruiterLogListComponent } from './__features/recruiter-log-list/recruiter-log-list.component';

// RxJS
import { ReadComponent } from './__state/read/read.component';
import { WriteComponent } from './__state/write/write.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './__state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './__state/reducers/state.reducer';

// Services
import { AuthResolver } from './app.route-resolver';
import { LocalAuthService } from './__services/auth.service';
import { AuthGuardService } from './app.route-guard.service';

import * as secrets from '../../credentials.json';
import * as _ from 'lodash';

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
    LandingComponent,
    MoneyComponent,
    MoneySelectionListComponent,
    MoneyRecurringPaymentsComponent,
    MoneyCreditCardsComponent,
    RecruiterLogComponent,
    RecruiterLogListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      appState: reducer
    }),
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SocialLoginModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    DragDropModule,
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [
    AuthGuardService,
    AuthResolver,
    LocalAuthService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
