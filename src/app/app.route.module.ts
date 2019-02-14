import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StatusComponent } from './status/status.component';
import { MoneyComponent } from './__features/money/money.component';
import { MoneySelectionListComponent } from './__features/money-selection-list/money-selection-list.component';
import { MoneyRecurringPaymentsComponent } from './__features/money-recurring-payments/money-recurring-payments.component';
import { MoneyCreditCardsComponent } from './__features/money-credit-cards/money-credit-cards.component';
import { MicroInteractionsComponent } from './__features/micro-interactions/micro-interactions.component';
import { MicroInteractionsDisableBtnDuringApiCallComponent } from './__features/micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './__features/micro-interactions-selection-list/micro-interactions-selection-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { RecruiterLogComponent } from './__features/recruiter-log/recruiter-log.component';
import { RecruiterLogListComponent } from './__features/recruiter-log-list/recruiter-log-list.component';
// import { LoginComponent } from './components/login/login.component';

import {
  AuthGuardService as AuthGuard 
} from './app.route-guard.service';

import { AuthResolver } from './app.route-resolver';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 'LoginPage'
    },
    children: []
  },
  {
    path: 'status',
    canActivate: [AuthGuard],
    component: StatusComponent,
    resolve: { auth: AuthResolver }
  },
  { path: 'recruiter-log',
    canActivate: [AuthGuard],
    component: RecruiterLogComponent,
    children: [ {
      path: '',
      component: RecruiterLogListComponent,
      data: {
        leftNav: 'menu'
      }
    } ]
  }, { path: 'money',
    canActivate: [AuthGuard],
    component: MoneyComponent,
    data: {
    },
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
    canActivate: [AuthGuard],
    component: MicroInteractionsComponent,
    children: [ {
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
    } ]
  }, {
    path: 'nav-menu',
    component: NavMenuComponent,
    canActivate: [AuthGuard],
    data: { animation: 'NavMenu'}
  }, {
    path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
