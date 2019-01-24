import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { AuthAccess } from './app.auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoneyComponent } from './money/money.component';
import { StatusComponent } from './status/status.component';
import { MicroInteractionsComponent } from './micro-interactions/micro-interactions.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {
  MicroInteractionsDisableBtnDuringApiCallComponent
} from './micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './micro-interactions-selection-list/micro-interactions-selection-list.component';

import { MoneySelectionListComponent } from './money-selection-list/money-selection-list.component';
import { MoneyRecurringPaymentsComponent } from './money-recurring-payments/money-recurring-payments.component';
import { MoneyCreditCardsComponent } from './money-credit-cards/money-credit-cards.component';

import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'status', component: StatusComponent, data: { animation: 'login' } },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'money',
    component: MoneyComponent,
    children: [
      {
        path: '',
        component: MoneySelectionListComponent,
        data: {
          leftNav: 'menu'
        }
      }, {
        path: 'recurring-payments',
        component: MoneyRecurringPaymentsComponent,
        data: {
          leftNav: 'back'
        }
      }, {
        path: 'open-accounts',
        component: MoneyCreditCardsComponent,
        data: {
          leftNav: 'back'
        }
      }
    ]
  }, {
    path: 'micro-interactions',
    component: MicroInteractionsComponent,
    data: {
      animation: 'login'
    },
    children: [
      {
        path: '',
        component: MicroInteractionsSelectionListComponent,
        data: {
          leftNav: 'menu'
        }
      }, {
        path: 'disable-btn-during-api-call',
        component: MicroInteractionsDisableBtnDuringApiCallComponent,
        data: {
          leftNav: 'back'
        }
      }
    ]
  },
  { path: 'nav-menu', component: NavMenuComponent, data: { animation: 'status' }, },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
